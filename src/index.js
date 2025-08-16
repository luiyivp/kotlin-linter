const core = require('@actions/core')
const exec = require('@actions/exec')
const tc = require('@actions/tool-cache')
const io = require('@actions/io');

export async function run() {
    try {
        const version = core.getInput('version')

        await setupKtlint(version)
        await runKtlint()
    } catch (error) {
        if (/\bprocess\b.+\bfailed\b/.test(error.message)) {
            core.setFailed(error.message)
        } else {
            core.setFailed(error.stack)
        }
    }
    process.exit()
}


async function setupKtlint(version) {
    const ktlintUrl = `https://github.com/pinterest/ktlint/releases/download/${version}/ktlint`

    core.info(`Installing Ktlint version: ${version}...`);
    
    const ktlintPath = await tc.downloadTool(ktlintUrl);
    await exec.exec('chmod a+x', ktlintPath);
    await exec.exec(ktlintPath);
    // await io.mv(ktlintPath, '/usr/local/bin/');

    core.info("Ktlint installed successfully.");
}

// async function runKtlint() {
//     core.info(`Running Ktlint check`);
//     await exec.exec('ktlint');
// }

if (__filename.endsWith('index.js')) { run() }