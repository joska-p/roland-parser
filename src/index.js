const fileInputElement = document.getElementById("file-input")
const outputElement = document.getElementById("output-container")

const handleFileSelect = event => {
  const files = event.target.files
  console.log("Selected files:", files)

  // You can loop through the files and perform any desired operations
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    console.log("File name:", file.name)
    console.log("File size:", file.size, "bytes")
    // ... perform additional operations with the file
  }
}

fileInputElement.addEventListener("change", handleFileSelect)
