// ===============================================
//      Cloud Storage Usage Tracker
// ===============================================

type UploadAction = {
  type: "upload";
  sizeMB: number;
};
type DeleteAction = {
  type: "delete";
  sizeMB: number;
};
type Action = UploadAction | DeleteAction;
function updateStorageUsage(currentUsedMB: number, action: Action): number {
  if (action.type === "upload") {
    return (currentUsedMB += action.sizeMB);
  }
  if (action.type === "delete" && action.sizeMB > currentUsedMB) {
    return 0;
  }
  return (currentUsedMB -= action.sizeMB);
}

console.log(updateStorageUsage(2000, { type: "upload", sizeMB: 500 }));
// 2500

console.log(updateStorageUsage(2000, { type: "delete", sizeMB: 800 }));
// 1200

// usage floor at zero:
console.log(updateStorageUsage(300, { type: "delete", sizeMB: 1000 }));
// 0
