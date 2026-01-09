/**
 * Tip Calculator Logic
 * Handles input validation, calculation, and DOM updates.
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const billInput = document.getElementById('billAmount');
    const serviceSelect = document.getElementById('serviceQuality');
    const peopleInput = document.getElementById('peopleCount');
    const calculateBtn = document.getElementById('calculateBtn');
    
    const errorMessage = document.getElementById('error-message');
    const resultsContainer = document.getElementById('results');
    
    const tipPerPersonEl = document.getElementById('tipPerPerson');
    const totalPerPersonEl = document.getElementById('totalPerPerson');
    const grandTotalEl = document.getElementById('grandTotal');

    /**
     * Format number as currency (INR)
     * @param {number} value 
     * @returns {string} Formatted string
     */
    function formatCurrency(value) {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(value);
    }

    /**
     * Validate Inputs
     * @returns {Object|null} Returns values object or null if invalid
     */
    function validateInputs() {
        const bill = parseFloat(billInput.value);
        const service = parseFloat(serviceSelect.value);
        const people = parseInt(peopleInput.value, 10);

        // Reset error state
        let isValid = true;

        if (isNaN(bill) || bill <= 0) isValid = false;
        if (isNaN(service)) isValid = false; // "Select..." option is value="" which parses to NaN
        if (isNaN(people) || people < 1) isValid = false;

        if (!isValid) {
            showError();
            hideResults();
            return null;
        }

        hideError();
        return { bill, service, people };
    }

    /**
     * Show Error Message
     */
    function showError() {
        errorMessage.classList.remove('hidden');
    }

    /**
     * Hide Error Message
     */
    function hideError() {
        errorMessage.classList.add('hidden');
    }

    /**
     * Show Results Section
     */
    function showResults() {
        resultsContainer.classList.remove('hidden');
    }

    /**
     * Hide Results Section
     */
    function hideResults() {
        resultsContainer.classList.add('hidden');
    }

    /**
     * Calculate and Display Tip
     */
    function calculateTip() {
        const values = validateInputs();

        if (!values) return;

        const { bill, service, people } = values;

        // Calculations
        const totalTip = bill * service;
        const totalBill = bill + totalTip;
        
        const tipPerPerson = totalTip / people;
        const totalPerPerson = totalBill / people; // This is (Bill + Tip) / People
        
        // Wait... typical tip calculators show:
        // Tip Amount / person
        // Total Bill (Grand Total)
        // Amount Per Person (Total / People) OR sometimes Total Bill / person.
        
        // Requirement says:
        // Result Section:
        // - Tip Amount
        // - Total Bill
        // - Amount Per Person
        
        // But my HTML structure has:
        // - Tip Amount / person
        // - Total Bill / person
        // - Grand Total
        
        // Let's stick to the HTML structure I designed which is clear math:
        // Tip Per Person = (Bill * Service) / People
        // Total Per Person = ((Bill * Service) + Bill) / People
        // Grand Total = (Bill * Service) + Bill
        
        // Let's update the text content
        tipPerPersonEl.textContent = formatCurrency(tipPerPerson);
        totalPerPersonEl.textContent = formatCurrency(totalPerPerson);
        grandTotalEl.textContent = formatCurrency(totalBill);

        // Show results
        showResults();
    }

    // Event Listener
    calculateBtn.addEventListener('click', calculateTip);

    // Optional: Clear results on input change to avoid stale data
    [billInput, serviceSelect, peopleInput].forEach(input => {
        input.addEventListener('input', () => {
            hideResults();
            hideError();
        });
    });
});
