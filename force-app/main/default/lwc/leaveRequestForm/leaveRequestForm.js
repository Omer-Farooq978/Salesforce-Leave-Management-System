
import { LightningElement } from 'lwc';
import submitLeaveRequest from '@salesforce/apex/LeaveRequestController.submitLeaveRequest';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LeaveRequestForm extends LightningElement {

    leaveType = '';

    leaveTypeOptions = [
        { label: 'Casual', value: 'Casual' },
        { label: 'Sick', value: 'Sick' },
        { label: 'Annual', value: 'Annual' }
    ];

    handleLeaveTypeChange(event) {
        this.leaveType = event.detail.value;
    }

    handleSubmit() {
        console.log('1. Submit button clicked');

        const inputs = this.template.querySelectorAll(
            'lightning-input, lightning-textarea, lightning-combobox'
        );

        let isValid = true;

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                input.reportValidity();
                isValid = false;
            }
        });

        console.log('2. Form validation:', isValid);

        if (!isValid) {
            return;
        }

        try {
            const getValue = (fieldName) => {
                const field = Array.from(inputs).find(
                    input => input.name === fieldName
                );

                if (!field) {
                    throw new Error('Field not found: ' + fieldName);
                }

                return field.value;
            };

            const employeeName = getValue('employeeName');
            const employeeEmail = getValue('employeeEmail');
            const startDate = getValue('startDate');
            const endDate = getValue('endDate');
            const leaveType = getValue('leaveType');
            const reason = getValue('reason');

            console.log('3. All field values collected');
            console.log('4. Sending data to Apex');

            submitLeaveRequest({
                employeeName,
                employeeEmail,
                startDate,
                endDate,
                leaveType,
                reason
            })
            .then(result => {
                console.log('5. Apex success:', result);

                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Leave request submitted successfully!',
                        variant: 'success'
                    })
                );

                inputs.forEach(input => {
                    input.value = '';
                });

                this.leaveType = '';
            })
            .catch(error => {
                console.error('Apex submission error:', error);
                console.error('Error details:', JSON.stringify(error));

                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Submission Error',
                        message: error?.body?.message || error?.message || 'Apex submission failed.',
                        variant: 'error'
                    })
                );
            });

        } catch (error) {
            console.error('JavaScript error message:', error.message);
            console.error('JavaScript error stack:', error.stack);
            console.error('Full JavaScript error:', error);

            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'JavaScript Error',
                    message: error.message || 'Something went wrong.',
                    variant: 'error'
                })
            );
        }
    }
}
