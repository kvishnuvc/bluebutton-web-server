// Global JS for the Sandbox Environment
// -------------------------------------

// Mobile Navigation Logic
// -----------------------

// Get all nav items from desktop menu to append to the mobile nav
const mobileNavContent = document.querySelector('.desktop-nav-items').innerHTML;

// Define the Mobile Nav Container - this is where we will append the mobileNavContent
const mobileNavContainer = document.querySelector('.mobile-nav-items');

// Apend nav items to mobile nav container
mobileNavContainer.innerHTML += mobileNavContent;

// Define the mobile nav trigger button - this opens and closes the mobile nav
const mobileNavTriggerButton = document.querySelector('.mobile-nav-trigger-button');

// Define the text for the mobile nav trigger button
const mobileNavTriggerText = document.querySelector('.mobile-nav-trigger-text');

const mobileNavIcon = mobileNavTriggerButton.querySelector('.mobile-nav-icon');

// Define the resize event listener to close the mobile nav on window resize
const closeNavOnResize = function(e) {
  if (mobileNavContainer.classList.contains('is-visible') === false) { return }
  // Close and reset the nav
  mobileNavTriggerText.innerHTML = 'Menu'
  mobileNavIcon.innerHTML = feather.icons['menu'].toSvg();
  mobileNavContainer.classList.remove('is-visible');
  mobileNavTriggerButton.classList.remove('trigger-active');
  console.log('Resize Call Active');
};

// Add an event listenter to close the nav if the window is resized
window.addEventListener('resize', closeNavOnResize);

// Add the click ation to the mobile nav trigger
mobileNavTriggerButton.addEventListener('click', function () {
  mobileNavContainer.classList.toggle('is-visible');
  mobileNavTriggerButton.classList.toggle('trigger-active');
  // Set up toggle for the menu icon and text
  if (mobileNavContainer.classList.contains('is-visible') === true) {
    mobileNavTriggerText.innerHTML = 'Close';
    mobileNavIcon.innerHTML = feather.icons['x'].toSvg();
  } else {
    mobileNavTriggerText.innerHTML = 'Menu'
    mobileNavIcon.innerHTML = feather.icons['menu'].toSvg();
  }
});

// Sanbox Dashboard UI Application List Interactions
// -------------------------------------------------

// Dashboard App Credential Toggle
// This shows/hides the client ID and secret for each application
const appCredentialToggleLinks = document.querySelectorAll('.app-credentials-toggle');

function toggleCredentials() {
  let appID = document.querySelector('#id-' + this.id);
  let appSecret = document.querySelector('#secret-' + this.id);
  if (appID.type == 'password') {
    appID.type = 'text';
    appSecret.type = 'text';
  } else {
    appID.type = 'password';
    appSecret.type = 'password';
  }
}

// Toggle credentials on mouse click
for (var i = 0; i < appCredentialToggleLinks.length; i++) {
	appCredentialToggleLinks[i].addEventListener('click', toggleCredentials);
}

// Toggle credentials on keyboard navigation
for (var i = 0; i < appCredentialToggleLinks.length; i++) {
	appCredentialToggleLinks[i].addEventListener('keypress', function (e) {
		var key = e.which || e.keyCode;
	  // If keypress is enter or spacebar
	  if (key === 13 | key === 32) {
		  e.preventDefault();
		  this.click();
		}
	});
}

// Copy Credentials to Clipboard (Run via HTML onClick)
function copyCredential(copyID) {
  // Get the element we want to copy
  let credentialToCopy = document.querySelector('#' + copyID);
  // If it is hidden, change to text, copy, and then hide again
  if (credentialToCopy.type == 'password') {
    credentialToCopy.type = 'text';
    credentialToCopy.select();
    document.execCommand('copy');
    credentialToCopy.type = 'password';
  } else {
    // Else, if it is shown, just copy!
    credentialToCopy.select();
    document.execCommand('copy');
  }
  // Fade In / Out Copy Confirmation Message
  let copyConfirmation = document.querySelector('#confirm-' + copyID);
  $( copyConfirmation ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
};

// BB Accordion Component
// ----------------------
// Used for: Sandbox Application Registration - Optional Info Accordion

const accordions = document.querySelectorAll('.accordion-toggle');

function accordionToggle () {
  let contentToToggle = this.nextElementSibling;
  let iconToToggle = this.querySelector('.accordion-icon');

  if (contentToToggle.classList.contains('accordion-content-visible')) {
	 contentToToggle.classList.remove('accordion-content-visible'); 
	 contentToToggle.setAttribute("aria-expanded", "false"); 
    iconToToggle.innerHTML = feather.icons['chevron-down'].toSvg();
  } else {
	 contentToToggle.classList.add('accordion-content-visible');
	 contentToToggle.setAttribute("aria-expanded", "true");
    iconToToggle.innerHTML = feather.icons['chevron-up'].toSvg();
  }
}

// Toggle Accordion on Click
for (var i = 0; i < accordions.length; i++) {
	accordions[i].addEventListener('click', accordionToggle);
}

// Toggle Accodrion on Enter Keypress (treated as click)
for (var i = 0; i < accordions.length; i++) {
	accordions[i].addEventListener('keypress', function (e) {
		var key = e.which || e.keyCode;
    if (key === 13 | key === 32) {
		e.preventDefault();
      this.click();
    } 
	});
}
