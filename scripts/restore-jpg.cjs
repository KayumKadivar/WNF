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
        } else if (stat.isFile() && fullPath.toLowerCase().endsWith('.webp')) {
            fileList.push(fullPath);
        }
    }
    return fileList;
}

async function convertImages() {
    const allFiles = await getFiles(directoryToSearch);
    console.log(`Found ${allFiles.length} images to restore.`);

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
    const newPath = path.join(dirname, `${basename}.jpg`);

    try {
        await fs.access(newPath);
        console.log(`JPG already exists for ${fullPath}, skipping...`);
        return;
    } catch (e) {
        // jpg does not exist
    }

    console.log(`Restoring ${fullPath} to JPG`);
    await sharp(fullPath)
        .jpeg({ quality: 90 })
        .toFile(newPath);

    console.log(`Success -> ${newPath}`);
}

convertImages()
    .then(() => console.log('All images restored successfully!'))
    .catch((err) => console.error('Restore run failed:', err));
