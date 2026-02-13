function palindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleaned = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
    
    // Reverse the cleaned string
    const reversed = cleaned.split("").reverse().join("");
    
    // Compare
    return cleaned === reversed;
}

module.exports = palindrome;
