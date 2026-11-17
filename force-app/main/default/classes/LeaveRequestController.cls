public with sharing class LeaveRequestController {

    @AuraEnabled(cacheable=true)
    public static List<Leave_Request__c> getLeaveRequests() {

        List<Leave_Request__c> requests = [
            SELECT Id,
                   Name,
                   Employee_Name__c,
                   Employee_Email__c,
                   Start_Date__c,
                   End_Date__c,
                   Leave_Type__c,
                   Reason__c,
                   Status__c
            FROM Leave_Request__c
            ORDER BY CreatedDate DESC
            LIMIT 100
        ];

        return requests;
    }

@AuraEnabled
public static Id submitLeaveRequest(
    String employeeName,
    String employeeEmail,
    Date startDate,
    Date endDate,
    String leaveType,
    String reason
) {

    Leave_Request__c newRequest = new Leave_Request__c();

    newRequest.Employee_Name__c = employeeName;
    newRequest.Employee_Email__c = employeeEmail;
    newRequest.Start_Date__c = startDate;
    newRequest.End_Date__c = endDate;
    newRequest.Leave_Type__c = leaveType;
    newRequest.Reason__c = reason;
    newRequest.Status__c = 'Pending';

    insert newRequest;

    return newRequest.Id;
}

}