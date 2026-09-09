// ===============================================
//      Music App Feature Access
// ===============================================
type Tier = "free" | "pro" | "premium";

function canAccessOfflineMode(tier: Tier): boolean {
  if (tier === "pro" || tier === "premium") {
    return true;
  }
  return false;
}

console.log(canAccessOfflineMode("free"));
