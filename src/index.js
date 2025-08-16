const core = require('@actions/core')
const exec = require('@actions/exec')
const tc = require('@actions/tool-cache')
const io = require('@actions/io');

export async function run() {
    try {
        const version = core.getInput('version')

        await setupKtlint(version)
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
    // const ktlintInstall = `curl -sSLO https://github.com/pinterest/ktlint/releases/download/${version}/ktlint && chmod a+x ktlint && sudo mv ktlint /usr/local/bin/`

    core.info(`Installing Ktlint version: ${version}...`);

    // await exec.exec('curl', '-sSLO', [`https://github.com/pinterest/ktlint/releases/download/${version}/ktlint`]);
    await tc.downloadTool(`https://github.com/pinterest/ktlint/releases/download/${version}/ktlint`);
    await exec.exec('ls -ltr');
    await exec.exec('chmod a+x ktlint');
    await io.mv('ktlint', '/usr/local/bin/');

    core.info("Ktlint installed successfully.");
}

if (__filename.endsWith('index.js')) { run() }