
// Making the categories key

const optionsInput = document.getElementById('options');

// Making the titles key

const descriptionsInput = document.getElementById('titleDescriptions');

const descriptionsValue = descriptionsInput.value;
const titleDescriptions = descriptionsValue.split(', ');

// Get the div where categories will be filled
const categoriesDiv = document.getElementById('categoriesKey');

// Get the options value and split it into an array
const optionsValue = optionsInput.value;
const optionsArray = optionsValue.split(', ');


// console.log(titleDescriptions);
// Loop through the options array and create div elements for each option
optionsArray.forEach((option, index) => {
    // Create a new div element
    const newDiv = document.createElement('div');
    // Set the text content of the div to the current option
    newDiv.textContent = option;
    // Add class to the div based on index
    newDiv.classList.add(`categoryOption${index + 1}`);
    newDiv.classList.add('categoriesKeys');
    // Append the new div to the categories div
    categoriesDiv.appendChild(newDiv);
});

// Getting user name
document.getElementById('nameStart').addEventListener('click', function() {
    var nameInput = document.getElementById('nameEntry').value.trim();
    if (nameInput === "") {
        alert('Please enter your name');
    } else {
        var nameVariable = nameInput;
        var currentDate = new Date().toLocaleDateString();
        var salesWheelText = nameVariable + "'s Career Wheel " + currentDate;
        var salesWheelDiv = document.createElement('h1');
        salesWheelDiv.textContent = salesWheelText;
        document.getElementById('mySalesWheel').appendChild(salesWheelDiv);
        document.getElementById('enterName').classList.add('hide');
    }
});



// Hiding tutorial

document.addEventListener('DOMContentLoaded', function () {
    var closeBtn = document.getElementById('closeTutorial');
    var tutorialPopup = document.getElementById('tutorialPopup');

    // Add click event listener to the close button
    closeBtn.addEventListener('click', function () {
        // Add the 'hide' class to the tutorialPopup
        tutorialPopup.classList.add('hide');
    });
});

// Showing tutorial

function showTutorial() {
    var tutorialPopup = document.getElementById('tutorialPopup');
    if (tutorialPopup) {
      tutorialPopup.classList.remove('hide');
    }
  }

// Finding segment title names

const titlesInput = document.getElementById('titles').value; // Assuming you have an input field for titles
const titlesGlobal = titlesInput.split(', ');



// Popup Form

function showPopupForm(segment, category, rim) {
    var categoryNumber = category.replace('categoryOption', '');

    // Loop through all popup forms
    for (var i = 1; i <= sizeLength; i++) {
        // Construct the popupForm id dynamically
        var popupFormId = "popupForm" + i;
        
        if (rim == 'rim1') {
            break; 

            } else {
            // Check if the current popup form matches the selected category
            if (i == categoryNumber) {
                document.getElementById(popupFormId).style.display = "block";
            } else {
                document.getElementById(popupFormId).style.display = "none";
            }
        }
    }

    // Logic to add 'selected' class based on category, rim, and segment
    // Assuming all potential items have a common class 'selectableItem'
    var selectableItems = document.querySelectorAll('.selectableItem');
    selectableItems.forEach(function(item) {
        // Reset the 'selected' class for each item before applying new selection
        item.classList.remove('selected');
        
        var itemCategoryMatch = item.classList.contains(category);
        var itemRimMatch = false;
        var itemSegmentMatch = false;

        // Check for rim match
        for (var rimIndex = 1; rimIndex <= 4; rimIndex++) {
            if (item.classList.contains('rim' + rimIndex) && rim == 'rim' + rimIndex) {
                itemRimMatch = true;
                break;
            }
        }

        // Check for segment match
        for (var segmentIndex = 1; segmentIndex <= 100; segmentIndex++) {
            if (item.classList.contains('segmentNumber' + segmentIndex) && segment == 'segmentNumber' + segmentIndex) {
                itemSegmentMatch = true;
                break;
            }
        }

        // If item matches category, rim, and segment, add 'selected' class
        if (itemCategoryMatch && itemRimMatch && itemSegmentMatch && rim != 'rim1') {
            item.classList.add('selected');
        }
    });

    

    
    
}

// Hide the Popup Form

function hidePopupForm1() {
    document.getElementById("popupForm1").style.display = "none";
    var selectedElements = document.getElementsByClassName("selected");
    for (var i = selectedElements.length - 1; i >= 0; i--) {
        selectedElements[i].classList.remove("selected");
    }
}

function hidePopupForm2() {
    document.getElementById("popupForm2").style.display = "none";
    var selectedElements = document.getElementsByClassName("selected");
    for (var i = selectedElements.length - 1; i >= 0; i--) {
        selectedElements[i].classList.remove("selected");
    }
}

function hidePopupForm3() {
    document.getElementById("popupForm3").style.display = "none";
    var selectedElements = document.getElementsByClassName("selected");
    for (var i = selectedElements.length - 1; i >= 0; i--) {
        selectedElements[i].classList.remove("selected");
    }
}

function hidePopupForm4() {
    document.getElementById("popupForm4").style.display = "none";
    var selectedElements = document.getElementsByClassName("selected");
    for (var i = selectedElements.length - 1; i >= 0; i--) {
        selectedElements[i].classList.remove("selected");
    }
}

function hidePopupForm5() {
    document.getElementById("popupForm5").style.display = "none";
    var selectedElements = document.getElementsByClassName("selected");
    for (var i = selectedElements.length - 1; i >= 0; i--) {
        selectedElements[i].classList.remove("selected");
    }
}

function hidePopupForm6() {
    document.getElementById("popupForm6").style.display = "none";
    var selectedElements = document.getElementsByClassName("selected");
    for (var i = selectedElements.length - 1; i >= 0; i--) {
        selectedElements[i].classList.remove("selected");
    }
}

function hidePopupForm7() {
    document.getElementById("popupForm7").style.display = "none";
    var selectedElements = document.getElementsByClassName("selected");
    for (var i = selectedElements.length - 1; i >= 0; i--) {
        selectedElements[i].classList.remove("selected");
    }
}

function hidePopupForm8() {
    document.getElementById("popupForm8").style.display = "none";
    var selectedElements = document.getElementsByClassName("selected");
    for (var i = selectedElements.length - 1; i >= 0; i--) {
        selectedElements[i].classList.remove("selected");
    }
}

function hidePopupForm9() {
    document.getElementById("popupForm9").style.display = "none";
    var selectedElements = document.getElementsByClassName("selected");
    for (var i = selectedElements.length - 1; i >= 0; i--) {
        selectedElements[i].classList.remove("selected");
    }
}

function hidePopupForm10() {
    document.getElementById("popupForm10").style.display = "none";
    var selectedElements = document.getElementsByClassName("selected");
    for (var i = selectedElements.length - 1; i >= 0; i--) {
        selectedElements[i].classList.remove("selected");
    }
}


// Submit button on Popup Form
let chosenCount = 0;
function submitForm(segment, category, rim) {
    // Extract values from inputs
    var selectedElement = document.querySelector('.selected');
    // console.log(selectedElement);

    
    

    if (selectedElement) {
        // Get the class list of the element, convert it to a string and split it into an array
        var classesArray = Array.from(selectedElement.classList);
    }
        segment = classesArray[0];
        category = classesArray[1];
        rim = classesArray[2];

        // console.log(classesArray);

        // If segment has already been chosen, show this alert
        if (classesArray.includes('chosen')) {
            // If 'chosen' exists, show an alert
            alert('This segment has already been chosen, to remove it, please press the cross on the corresponding box below.');
            
        } else {

            // console.log(category);
            if (category == 'categoryOption1') {
                var jobTitle = document.getElementById("jobTitle1").value;
                var companyName = document.getElementById("companyName1").value;
            } else if (category == 'categoryOption2') {
                var jobTitle = document.getElementById("jobTitle2").value;
                var companyName = document.getElementById("companyName2").value;
            } else if (category == 'categoryOption3') {
                var jobTitle = document.getElementById("jobTitle3").value;
                var companyName = document.getElementById("companyName3").value;
            } else if (category == 'categoryOption4') {
                var jobTitle = document.getElementById("jobTitle4").value;
                var companyName = document.getElementById("companyName4").value;
            } else if (category == 'categoryOption5') {
                var jobTitle = document.getElementById("jobTitle5").value;
                var companyName = document.getElementById("companyName5").value;
            } else if (category == 'categoryOption6') {
                var jobTitle = document.getElementById("jobTitle6").value;
                var companyName = document.getElementById("companyName6").value;
            } else if (category == 'categoryOption7') {
                var jobTitle = document.getElementById("jobTitle7").value;
                var companyName = document.getElementById("companyName7").value;
            } else if (category == 'categoryOption8') {
                var jobTitle = document.getElementById("jobTitle8").value;
                var companyName = document.getElementById("companyName8").value;
            } else if (category == 'categoryOption9') {
                var jobTitle = document.getElementById("jobTitle9").value;
                var companyName = document.getElementById("companyName9").value;
            } else if (category == 'categoryOption10') {
                var jobTitle = document.getElementById("jobTitle10").value;
                var companyName = document.getElementById("companyName10").value;
            } 

            if (jobTitle.trim() === "") {
                alert("Please enter a job title");
            } else if (companyName.trim() === "") {
                alert("Please enter a company name");
            } else {


            selectedElement.classList.add("chosen");
            
            chosenCount++;
            // Use the incremented count to assign a unique chosen class (e.g., 'chosen1')
            selectedElement.classList.add(`chosen${chosenCount}`);
            // Create and show popup with variable info
            createAndShowPopup(segment, category, rim, jobTitle, companyName, chosenCount);
            
                if (category == 'categoryOption1') {
                    hidePopupForm1();
                } else if (category == 'categoryOption2') {
                    hidePopupForm2();
                } else if (category == 'categoryOption3') {
                    hidePopupForm3();
                } else if (category == 'categoryOption4') {
                    hidePopupForm4();
                } else if (category == 'categoryOption5') {
                    hidePopupForm5();
                } else if (category == 'categoryOption6') {
                    hidePopupForm6();
                } else if (category == 'categoryOption7') {
                    hidePopupForm7();
                } else if (category == 'categoryOption8') {
                    hidePopupForm8();
                } else if (category == 'categoryOption9') {
                    hidePopupForm9();
                } else if (category == 'categoryOption10') {
                    hidePopupForm10();
                }
            
            }
    }
    
}

// Creating and showing the popup boxes at the bottom

function createAndShowPopup(segment, category, rim, jobTitle, companyName, chosenId) {
    // Create popup div
    var parentDiv = document.getElementById("podSection");
    var popupDiv = document.createElement("div");
    var textDiv = document.createElement("div");
    
    popupDiv.setAttribute("class", "infoPopup");
    popupDiv.style.width = "25%";
    popupDiv.style.margin = "20px";
    popupDiv.style.padding = "5px 17px";
    popupDiv.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    popupDiv.style.zIndex = "1000"; // Ensure it's above other content
    popupDiv.style.display = "flex";
    popupDiv.style.justifyContent = "space-between";
    popupDiv.style.alignItems = "center";
    popupDiv.classList.add(category);
    popupDiv.classList.add(segment);
    popupDiv.classList.add(rim);
    popupDiv.classList.add("popupDiv");

    //
    
    chosenSegment = `${segment}`;
    chosenCategory = `${category}`;
    chosenRim = `${rim}`;


    // Create paragraphs for segment, category, rim, job title and company name

    var segmentP = document.createElement("p");
    segmentP.textContent = `Segment: ${segment}`;
    var categoryP = document.createElement("p");
    categoryP.textContent = `Category: ${category}`;
    var rimP = document.createElement("p");
    rimP.textContent = `${rim}`;
    var jobTitleP = document.createElement("p");
    jobTitleP.textContent = `${jobTitle}`;
    jobTitleP.className = 'jobTitleP';
    var companyP = document.createElement("p");
    companyP.textContent = `${companyName}`;
    companyP.className = 'companyP';

    // Choosing which rim is selected to update cirlce icon

    var rimIcon = `${rim}`;
    var lastNumb = rimIcon.slice(-1);
    var iconDiv = document.createElement("div");

    var categorySelector = category.slice(-1);
    // console.log(categorySelector);

    if (lastNumb == 2) {
        iconDiv.className = "lowCircle";
    } else if (lastNumb == 3) {
        iconDiv.className = "midCircle";
    } else if (lastNumb == 4) {
        if (categorySelector == 1) {
            iconDiv.className = "highCircle1";
        } else if (categorySelector == 2) {
            iconDiv.className = "highCircle2";
        } else if (categorySelector == 3) {
            iconDiv.className = "highCircle3";
        } else if (categorySelector == 4) {
            iconDiv.className = "highCircle4";
        } else if (categorySelector == 5) {
            iconDiv.className = "highCircle5";
        } else if (categorySelector == 6) {
            iconDiv.className = "highCircle6";
        } else if (categorySelector == 7) {
            iconDiv.className = "highCircle7";
        } else if (categorySelector == 8) {
            iconDiv.className = "highCircle8";
        } else if (categorySelector == 9) {
            iconDiv.className = "highCircle9";
        } else if (categorySelector == 10) {
            iconDiv.className = "highCircle10";
        } 
    }


    // Code to decide which segment title is chosen
    
    let segmentNumber = parseInt(chosenSegment.charAt(chosenSegment.length - 1));
   
    // Adjust for zero-based index of arrays in JavaScript
    let index = chosenSegment.replace('segmentNumber', '') - 1;
  
    // Use the index to find the corresponding item in titlesGlobal
    let titleAnswer;
    if (index >= 0 && index < titlesGlobal.length) {
        titleAnswer = titlesGlobal[index];
    } else {
        titleAnswer = "Index out of range";
    }

    

    var titleAnswerP = document.createElement("p");
    titleAnswerP.textContent = titleAnswer;



    // Add paragraphs to popup
    // popupDiv.appendChild(segmentP);
    // popupDiv.appendChild(categoryP);
    // popupDiv.appendChild(rimP);
    
    textDiv.appendChild(titleAnswerP);
    textDiv.appendChild(jobTitleP);
    textDiv.appendChild(companyP);
    textDiv.style.width = "100%";
    textDiv.style.textAlign = "left";
    popupDiv.appendChild(iconDiv);
    popupDiv.appendChild(textDiv);
    
    

    // Append popup to body
    
    parentDiv.appendChild(popupDiv);


    // Function to create the delete button
    
    function createDeleteButton() {
        const deleteButton = document.createElement('div');
        deleteButton.classList.add(`deleteIcon`); // delete styling
        deleteButton.classList.add(`delete${chosenId}`); // Use unique class for deletion

        deleteButton.addEventListener('click', function() {
            // Target the specific 'chosen' class using the unique identifier
            const itemToUnchoose = document.querySelector(`.chosen${chosenId}`);
            if (itemToUnchoose) {
                itemToUnchoose.classList.remove(`chosen${chosenId}`);
                itemToUnchoose.classList.remove('chosen');
            }
            // Hide this popup specifically
            popupDiv.classList.add('hide');
        });

        popupDiv.appendChild(deleteButton);
    }

    createDeleteButton();
    
    
}







// Creating the Sales Wheel

let segmentCounter = 1; // Initialize a global counter for segment class naming

function drawGrid(optionsMap = new Map()) {
    const sectors = parseInt(document.getElementById('sectors').value);
    const container = document.getElementById('gridContainer');
    

    const svgNS = "http://www.w3.org/2000/svg";
    let svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', '-50 -50 100 100');
    svg.setAttribute('overflow', 'visible');
    svg.setAttribute('margin-top', '170px');

    // Define the radii for the special grid structure
    const innermostRingSize = 50 * (2 / 4); // Innermost segment as large as two outer segments
    const outerRingSize = (50 - innermostRingSize) / 3; // Size of each of the three outer rings
    const ringRadii = [innermostRingSize, innermostRingSize + outerRingSize, innermostRingSize + 2 * outerRingSize, 50];

    let optionIndex = 1; // Start index for option group class naming
    let currentSector = 0;
    let titleIndex = 0;
    const titlesInput = document.getElementById('titles').value; // Assuming you have an input field for titles
    const titles = titlesInput.split(', ');
    
    optionsMap.forEach((size, option) => {
        const color = getRandomColor(); // Assign a random color for each option
        const optionClassName = `categoryOption${optionIndex}`; // Class name for the option group
        
        for (let i = 0; i < size; i++) {
            if (currentSector < sectors) {
                const segmentClassName = `segmentNumber${segmentCounter}`; // Unique class name for each segment
                drawSegment(svg, sectors, currentSector, ringRadii, color, segmentClassName, optionClassName, titles, titleIndex);
                currentSector++;
                segmentCounter++;
                titleIndex++;
            }
        }
        optionIndex++;
    });

    // Drawing remaining segments if any, with default color and unique class names
    while (currentSector < sectors) {
        const segmentClassName = `segmentClass${segmentCounter}`;
        drawSegment(svg, sectors, currentSector, ringRadii, '#ddd', segmentClassName, '');
        currentSector++;
        segmentCounter++;
    }

    // Redrawing white lines remains unchanged...
    drawWhiteLines(svg, sectors, ringRadii);

    container.appendChild(svg);
}


// Creating the segments

let segmentSelector = [];
function drawSegment(svg, totalSectors, sectorIndex, ringRadii, color, segmentClassName, optionClassName, titles, titleIndex, titleDescriptions) {
    const svgNS = "http://www.w3.org/2000/svg";
    const anglePerSector = (2 * Math.PI) / totalSectors;
    const startAngle = sectorIndex * anglePerSector - Math.PI / 2; // Adjusted to start from the top
    const endAngle = (sectorIndex + 1) * anglePerSector - Math.PI / 2; // Adjusted to start from the top
    const midAngle = startAngle + (endAngle - startAngle) / 2; // Midpoint angle for the title


        // Determine if the segment is an outer segment
        const isOuterSegment = ringRadii.length > 1 && sectorIndex < totalSectors / 2;

        // Set fill color based on whether it's an outer segment or not
        const fillColor = isOuterSegment ? '#ccc' : color;

    // Calculate the position for the text
    const outerRadiusAdjustment = 10; // Distance to move text outwards
    const adjustedOuterRadius = ringRadii[ringRadii.length - 1] + outerRadiusAdjustment; // Add 30 to the last segment's radius
    const textX = adjustedOuterRadius * Math.cos(midAngle); - 1;
    const textY = adjustedOuterRadius * Math.sin(midAngle) - 3;

    for (let i = 0; i < ringRadii.length; i++) {
        const innerRadius = i === 0 ? 0 : ringRadii[i - 1];
        const path = document.createElementNS(svgNS, "path");
        const d = `M ${innerRadius * Math.cos(startAngle)} ${innerRadius * Math.sin(startAngle)}
                   L ${ringRadii[i] * Math.cos(startAngle)} ${ringRadii[i] * Math.sin(startAngle)}
                   A ${ringRadii[i]} ${ringRadii[i]} 0 0 1 ${ringRadii[i] * Math.cos(endAngle)} ${ringRadii[i] * Math.sin(endAngle)}
                   L ${innerRadius * Math.cos(endAngle)} ${innerRadius * Math.sin(endAngle)}
                   A ${innerRadius} ${innerRadius} 0 0 0 ${innerRadius * Math.cos(startAngle)} ${innerRadius * Math.sin(startAngle)}
                   Z`;
        path.setAttribute('d', d);
        path.setAttribute('fill', color);
        path.setAttribute('class', `${segmentClassName} ${optionClassName} rim${i+1} selectableItem`); // Adjusted to start rim class from 1
        
        svg.appendChild(path);
        path.onclick = function(event) {
            // Update segmentSelector with the details of the clicked segment
            segmentSelector = {
                SegmentClassName: segmentClassName,
                CategoryOptionName: optionClassName,
                RimName: `rim${i+1}`
            };
            let SegmentClassSelect = segmentSelector.SegmentClassName;
            let CategoryOptionSelect = segmentSelector.CategoryOptionName;
            let RimNameSelect = segmentSelector.RimName;

            
            showPopupForm(SegmentClassSelect, CategoryOptionSelect, RimNameSelect);
            
            // console.log(segmentSelector); // Optional: Log it here if you want to see the update immediately after click
        };
    }

    // Add the title text for the segment
    if (titles) {
        const text = document.createElementNS(svgNS, "text");
        text.setAttribute('x', textX);
        text.setAttribute('y', textY);
        text.setAttribute('fill', 'black');
        text.setAttribute('dominant-baseline', 'middle');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', '2');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('cursor', 'pointer');
        
        for (let i = 0; i < ringRadii.length; i++) {
            const innerRadius = i === 0 ? 0 : ringRadii[i - 1];
            const path = document.createElementNS(svgNS, "path");
            const d = `M ${innerRadius * Math.cos(startAngle)} ${innerRadius * Math.sin(startAngle)}
                       L ${ringRadii[i] * Math.cos(startAngle)} ${ringRadii[i] * Math.sin(startAngle)}
                       A ${ringRadii[i]} ${ringRadii[i]} 0 0 1 ${ringRadii[i] * Math.cos(endAngle)} ${ringRadii[i] * Math.sin(endAngle)}
                       L ${innerRadius * Math.cos(endAngle)} ${innerRadius * Math.sin(endAngle)}
                       A ${innerRadius} ${innerRadius} 0 0 0 ${innerRadius * Math.cos(startAngle)} ${innerRadius * Math.sin(startAngle)}
                       Z`;
            path.setAttribute('d', d);
            text.setAttribute('class', `${segmentClassName} ${optionClassName} rim5 selectableItem`); // Adjusted to start rim class from 1
        }

        const title = titles[titleIndex];
        const words = title.split(" "); // Split text into individual words
        
        // Add each word as a <tspan> element with <br> between them if more than 8 letters
        let currentLine = "";
        words.forEach((word, index) => {
            if (currentLine.length > 5) {
                const tspan = document.createElementNS(svgNS, 'tspan');
                tspan.setAttribute('x', textX);
                tspan.setAttribute('dy', '1.2em'); // Adjust vertical spacing
                tspan.textContent = currentLine.trim();
                text.appendChild(tspan);
                currentLine = "";
            }
        
            currentLine += word + " ";
        });
        
        // Add the remaining text
        if (currentLine.trim().length > 0) {
            const tspan = document.createElementNS(svgNS, 'tspan');
            tspan.setAttribute('x', textX);
            tspan.setAttribute('dy', '1.2em'); // Adjust vertical spacing
            tspan.textContent = currentLine.trim();
            text.appendChild(tspan);
        }

        // Description Hover event
        const descriptionsInput = document.getElementById('titleDescriptions');
        const descriptionsValue = descriptionsInput.value;
        const titleDescriptions = descriptionsValue.split(', ');
        const description = titleDescriptions[titleIndex];

        // Mouse enter event
        text.addEventListener('mouseenter', function(e) {
            // Get tooltip div and set its content
            const tooltip = document.getElementById('tooltip');
            tooltip.innerHTML = description; // Set the tooltip text to the description
            
            // Calculate position; this is a simple example, you might need to adjust
            const rect = e.target.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
            tooltip.style.top = `${rect.top + window.scrollY - 20}px`; // Adjust as needed
            tooltip.setAttribute('class', `${segmentClassName} ${optionClassName} selectableItem`); 
            tooltip.style.display = 'block'; // Show the tooltip
        });

        // Mouse leave event
        text.addEventListener('mouseleave', function() {
            const tooltip = document.getElementById('tooltip');
            tooltip.style.display = 'none'; // Hide the tooltip
        });

        
        svg.appendChild(text);
    }


}


function drawWhiteLines(svg, sectors, ringRadii) {
    const svgNS = "http://www.w3.org/2000/svg";
    // Calculate the radius of the innermost circle to exclude lines within it
    const innermostCircleRadius = ringRadii[0];

    // Draw white lines for sectors outside the innermost circle
    for (let i = 0; i < sectors; i++) {
        // Adjust the start angle to make it start from the top (12 o'clock)
        const angle = ((2 * Math.PI / sectors) * i) - Math.PI / 2; // Subtract π/2 to rotate the start angle to the top
        // Start the line at the edge of the innermost circle instead of the center
        const line = document.createElementNS(svgNS, "line");
        line.setAttribute('x1', innermostCircleRadius * Math.cos(angle));
        line.setAttribute('y1', innermostCircleRadius * Math.sin(angle));
        line.setAttribute('x2', 50 * Math.cos(angle));
        line.setAttribute('y2', 50 * Math.sin(angle));
        line.setAttribute('stroke', 'white');
        line.setAttribute('stroke-width', '0.5');
        svg.appendChild(line);
    }

    // Draw white circles for rings
    ringRadii.forEach(radius => {
        const circle = document.createElementNS(svgNS, "circle");
        circle.setAttribute('cx', '0');
        circle.setAttribute('cy', '0');
        circle.setAttribute('r', radius);
        circle.setAttribute('fill', 'none');
        circle.setAttribute('stroke', 'white');
        circle.setAttribute('stroke-width', '0.5');
        svg.appendChild(circle);
    });
}



function updateGrid() {
    const options = document.getElementById('options').value.split(',');
    const sizes = document.getElementById('sizes').value.split(',').map(Number);
    const optionsMap = new Map();
    options.forEach((option, index) => {
        optionsMap.set(option.trim(), sizes[index]);
    });
    drawGrid(optionsMap);
    let sizeLength = sizes.length;
    return sizeLength;
}


let sizeLength = updateGrid();
// console.log(sizeLength);

// Ignore this (was a random color selector incase we needed)
function getRandomColor() {
    const colors = ['#a61e2f', '#A5825A', '#182852', '#487A7C', '#FFCE51', '#DC8633'];
    // Randomly choose one of the colors from the array
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}



// Draw initial grid with default settings
// window.onload = () => updateGrid(); // Automatically draw the initial grid based on the default or updated values


