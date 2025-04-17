function parseMarkdown(markdownText) {
    const lines = markdownText.split('\n');
    let html = '';
    let inList = false;
    let listType = null; // 'ul' or 'ol'
    let inBlockquote = false;
    let paragraphBuffer = '';

    const flushParagraph = () => {
        if (paragraphBuffer) {
            html += `<p>${paragraphBuffer.trim()}</p>`;
            paragraphBuffer = '';
        }
    };

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        let trimmedLine = line.trim();

        // 1. Headers
        if (trimmedLine.startsWith('#')) {
            flushParagraph(); // Close any open paragraph
            let headerLevel = 0;
            while (trimmedLine.startsWith('#')) {
                headerLevel++;
                trimmedLine = trimmedLine.substring(1).trim();
            }
            if (headerLevel > 0 && headerLevel <= 6) {
                html += `<h${headerLevel}>${trimmedLine}</h${headerLevel}>`;
            } else {
                // Treat as regular text if invalid header level (more than 6 #)
                paragraphBuffer += line + '\n';
            }
            inList = false; // Headers break lists
            inBlockquote = false; // Headers break blockquotes
            continue;
        }

        // 2. Horizontal Rules
        if (/^[-_*]{3,}$/.test(trimmedLine)) {
            flushParagraph();
            html += '<hr>';
            inList = false;
            inBlockquote = false;
            continue;
        }

        // 3. Lists (Unordered and Ordered)
        const unorderedListRegex = /^[*+-]\s+(.*)/;
        const orderedListRegex = /^(\d+)\.\s+(.*)/;
        const isUnorderedItem = unorderedListRegex.test(trimmedLine);
        const isOrderedItem = orderedListRegex.test(trimmedLine);

        if (isUnorderedItem || isOrderedItem) {
            flushParagraph(); // Close any open paragraph
            const listItemMatch = trimmedLine.match(isUnorderedItem ? unorderedListRegex : orderedListRegex);
            const listItemText = listItemMatch[2]; // Get the list item text
            const currentListType = isUnorderedItem ? 'ul' : 'ol';

            if (!inList || listType !== currentListType) {
                if (inList) {
                    html += `</${listType}>`; // Close previous list if type changed
                }
                html += `<${currentListType}>`;
                inList = true;
                listType = currentListType;
            }
            html += `<li>${parseInlineMarkdown(listItemText)}</li>`; // Parse inline markdown inside list items
            inBlockquote = false; // Lists break blockquotes
            continue;
        } else if (inList) {
            html += `</${listType}>`; // Close list if no longer a list item
            inList = false;
            listType = null;
        }

        // 4. Blockquotes
        if (trimmedLine.startsWith('>')) {
            flushParagraph(); // Close any open paragraph
            if (!inBlockquote) {
                html += '<blockquote>';
                inBlockquote = true;
            }
            html += `<p>${parseInlineMarkdown(trimmedLine.substring(1).trim())}</p>`; // Parse inline markdown inside blockquotes
            inList = false; // Blockquotes break lists
            continue;
        } else if (inBlockquote) {
            html += '</blockquote>'; // Close blockquote if no longer a blockquote line
            inBlockquote = false;
        }


        // 5. Paragraphs (Default)
        if (trimmedLine !== '') {
            paragraphBuffer += line + '\n';
        } else {
            flushParagraph(); // Flush paragraph on blank line
        }
    }

    flushParagraph(); // Flush any remaining paragraph at the end

    if (inList) {
        html += `</${listType}>`; // Close any open list at the end
    }
    if (inBlockquote) {
        html += '</blockquote>'; // Close any open blockquote at the end
    }

    return html;
}

function parseInlineMarkdown(text) {
    // 1. Bold and Italics (* and _)
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Bold **bold**
    text = text.replace(/__(.*?)__/g, '<strong>$1</strong>');     // Bold __bold__
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');           // Italics *italic*
    text = text.replace(/_(.*?)_/g, '<em>$1</em>');             // Italics _italic_

    // 2. Inline Code (`code`)
    text = text.replace(/`(.*?)`/g, '<code>$1</code>');

    // 3. Links ([text](url))
    text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    return text;
}

// Example Usage:
const markdownInput = `
# My Awesome Document

This is a paragraph of text. It can span multiple lines.

**This is bold text**, and *this is italic text*.

* Unordered list item 1
* Unordered list item 2

1. Ordered list item 1
2. Ordered list item 2

[Link to Google](https://www.google.com)

Inline \`code\` example.

> This is a blockquote.
> It can also span multiple lines.

---
`;

const htmlOutput = parseMarkdown(markdownInput);
console.log(htmlOutput);