#pragma once

#define CRYPTONOTE_NAME                        "stashusd"
#define CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX 37   // örnek
static const uint8_t     MONEY_DECIMAL_POINT = 4;  // 1 STUSD = 10^4 atomic units
static const uint64_t    MONEY_SUPPLY = UINT64_C(1000000000000000);
static const uint64_t    GENESIS_BLOCK_REWARD = 0;
static const uint64_t    CRYPTONOTE_PUBLIC_RPC_PORT = 18081;
static const uint64_t    CRYPTONOTE_PUBLIC_P2P_PORT = 18080;
