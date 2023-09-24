
export const API_URLS = {
    saveSentEmail : {
        endpoint: 'save',
        method: "POST"
    },
    getEmailFromType : {
        endpoint: 'emails',
        method: "GET",
    },
    saveDraftEmail : {
        endpoint: 'save-drafts',
        method : "POST"
    },
    moveEmailToBin : {
        endpoint: 'bin',
        method: 'POST',
    },
    toggleStarredEmail : {
        endpoint : 'starred',
        method : "POST",
    },
    deleteEmail : {
        endpoint : 'delete',
        method : "DELETE",
    }
}