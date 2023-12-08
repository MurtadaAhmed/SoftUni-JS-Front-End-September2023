function encodeAndDecodeMessages() {
    let encodeTextArea = document.getElementsByTagName("textarea")[0];
    let encodeButton = document.getElementsByTagName("button")[0];

    let decodeTextArea = document.getElementsByTagName("textarea")[1];
    let decodeButton = document.getElementsByTagName("button")[1];

    encodeButton.addEventListener("click", encodeMessage);
    decodeButton.addEventListener("click", decodeMessage);

    function encodeMessage() {
        let message = encodeTextArea.value;
        let newMessage = "";

        for (let i = 0; i < message.length; i++) {
            charCodePlusOne = message.charCodeAt(i) + 1 // converting the character into charcode an adding one to it
            newLetterAfterEncoding = String.fromCharCode(charCodePlusOne) // converting the new charcode back to string
            newMessage += newLetterAfterEncoding
            
        }
        decodeTextArea.value = newMessage;
        encodeTextArea.value = "";
    }

    function decodeMessage() {

        let message = decodeTextArea.value;
        let newMessage = "";

        for (let i = 0; i < message.length; i++) {
            charCodeMinusOne = message.charCodeAt(i) - 1
            newLetterAfterDecoding = String.fromCharCode(charCodeMinusOne)
            newMessage += newLetterAfterDecoding
            
        }
        decodeTextArea.value = "";
        decodeTextArea.value = newMessage;
        
        
    }
}