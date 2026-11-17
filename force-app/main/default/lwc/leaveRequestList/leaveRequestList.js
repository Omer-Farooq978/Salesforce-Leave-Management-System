
import { LightningElement, wire } from 'lwc';
import getLeaveRequests from '@salesforce/apex/LeaveRequestController.getLeaveRequests';

export default class LeaveRequestList extends LightningElement {

    requests = [];
    errorMessage;

    columns = [
        {
            label: 'Request Number',
            fieldName: 'Name',
            type: 'text'
        },
        {
            label: 'Employee Name',
            fieldName: 'Employee_Name__c',
            type: 'text'
        },
        {
            label: 'Leave Type',
            fieldName: 'Leave_Type__c',
            type: 'text'
        },
        {
            label: 'Start Date',
            fieldName: 'Start_Date__c',
            type: 'date'
        },
        {
            label: 'End Date',
            fieldName: 'End_Date__c',
            type: 'date'
        },
        {
            label: 'Status',
            fieldName: 'Status__c',
            type: 'text'
        }
    ];

    @wire(getLeaveRequests)
    wiredLeaveRequests({ data, error }) {

        if (data) {
            this.requests = data;
            this.errorMessage = undefined;
        } else if (error) {
            this.errorMessage =
                error.body?.message || 'Unable to load leave requests.';
        }
    }
}
