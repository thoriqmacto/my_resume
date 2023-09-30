function estimateTextContent({
  fontSize = 12, // Font size in pixels
  lineHeight = 1.5, // Line height as a multiplier of font size
  margins = {
    // Margins in millimeters
    top: 25.4, // 1 inch = 25.4 mm
    right: 25.4,
    bottom: 25.4,
    left: 25.4,
  },
}) {
  const A4Dimensions = {
    width: 210, // A4 width in millimeters
    height: 297, // A4 height in millimeters
  };

  // Convert margins to pixels (assuming 1 inch = 96 pixels)
  const marginsInPixels = {
    top: (margins.top * 96) / 25.4,
    right: (margins.right * 96) / 25.4,
    bottom: (margins.bottom * 96) / 25.4,
    left: (margins.left * 96) / 25.4,
  };

  // Calculate available space for text in pixels
  const availableWidth =
    A4Dimensions.width * 96 - marginsInPixels.left - marginsInPixels.right;
  const availableHeight =
    A4Dimensions.height * 96 - marginsInPixels.top - marginsInPixels.bottom;

  // Calculate the number of lines that can fit vertically
  const linesVertical = Math.floor(availableHeight / (fontSize * lineHeight));

  // Estimate the number of characters per line (assuming an average of 10 characters per inch)
  const charsPerInch = fontSize / 0.075; // Approximation
  const charsPerLine = Math.floor((availableWidth / 96) * charsPerInch);

  // Estimate the total number of characters that can fit on the page
  const totalChars = linesVertical * charsPerLine;

  return {
    linesVertical,
    charsPerLine,
    totalChars,
  };
}

// Example usage:
/* const estimation = estimateTextContent({
  fontSize: 12,
  lineHeight: 1.5,
  margins: { top: 25.4, right: 25.4, bottom: 25.4, left: 25.4 },
});
console.log(estimation); */

export default estimateTextContent;
