export function sagaAction(action) {
    const types = {
        success: "SUCCESS",
        failed: "FAILED",
    };
    return (type) => {
        if (!type) return `${action}`;
        const actionType = type.toLowerCase();
        if (!types[actionType]) return "UNKNOWN_ACTION";
        return `${action}_${types[actionType]}`;
    };
}