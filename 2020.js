document.addEventListener('DOMContentLoaded', function () {
    loadTracksForYear(2020); // Load tracks specifically for 2016 when the page is loaded
    // Add any additional 2016-specific functionality here if needed
});

// Add event listener for the sonnet button click
document.getElementById('poem-button').addEventListener('click', async () => {
    const ts = 2020; // Replace this with the actual timestamp or year you want to use
    const trackNames = await fetchSonnetTrackNames(ts);

    if (trackNames.length > 0) {
        const sonnet = generateStructuredSonnet(trackNames);
        displaySonnetWithTypingEffect(sonnet);
    } else {
        console.log('No track names found for the sonnet.');
    }
});

window.addEventListener('load', function() {
    const selectedYear = 2020; // You can dynamically change this year as needed
    loadIpAddressesForYear(selectedYear);
});