const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.differedPrompt = event;
    butInstall.classList.toggle('hidden', false);

});

// Implemented a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const { differedPrompt } = window;
    if (!differedPrompt) {
        return;
    }
    differedPrompt.prompt();
    const { outcome } = await differedPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    window.differedPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// Added an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.differedPrompt = null;
});
