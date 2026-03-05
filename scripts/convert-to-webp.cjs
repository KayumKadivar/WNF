const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

const directoryToSearch = './src/assets/NewImages';
const MAX_CONCURRENCY = 8;

async function getFiles(dir, fileList = []) {
    const files = await fs.readdir(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = await fs.stat(fullPath);
        if (stat.isDirectory()) {
            await getFiles(fullPath, fileList);
        } else if (stat.isFile() && (fullPath.toLowerCase().endsWith('.png') || fullPath.toLowerCase().endsWith('.jpg') || fullPath.toLowerCase().endsWith('.jpeg'))) {
            fileList.push(fullPath);
        }
    }
    return fileList;
}

async function convertImages() {
    const allFiles = await getFiles(directoryToSearch);
    console.log(`Found ${allFiles.length} images to process.`);

    let activePromises = 0;
    let index = 0;
    let completed = 0;

    return new Promise((resolve, reject) => {
        function next() {
            while (activePromises < MAX_CONCURRENCY && index < allFiles.length) {
                const fullPath = allFiles[index++];
                activePromises++;

                processFile(fullPath)
                    .then(() => {
                        completed++;
                        console.log(`Progress: ${completed}/${allFiles.length} (${Math.round((completed / allFiles.length) * 100)}%)`);
                    })
                    .catch(e => console.error(e))
                    .finally(() => {
                        activePromises--;
                        if (completed === allFiles.length) {
                            resolve();
                        } else {
                            next();
                        }
                    });
            }
        }
        next();
        if (allFiles.length === 0) resolve();
    });
}

async function processFile(fullPath) {
    const dirname = path.dirname(fullPath);
    const extname = path.extname(fullPath);
    const basename = path.basename(fullPath, extname);
    const newPath = path.join(dirname, `${basename}.webp`);

    try {
        await fs.access(newPath);
        console.log(`WebP already exists for ${fullPath}, deleting original and skipping...`);
        try { await fs.unlink(fullPath); } catch (e) { }
        return;
    } catch (e) {
        // webp does not exist
    }

    console.log(`Converting ${fullPath}`);
    await sharp(fullPath)
        .webp({ quality: 80 })
        .toFile(newPath);

    console.log(`Success -> ${newPath}`);
    await fs.unlink(fullPath);
}

convertImages()
    .then(() => console.log('All concurrent conversions completed successfully!'))
    .catch((err) => console.error('Converse run failed:', err));
