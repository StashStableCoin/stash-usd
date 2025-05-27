# Stash USD (STUSD)

## Nasıl Derlenir?

### 1. cryptonote-core
```bash
cd stash-usd/cryptonote-core
git clone https://github.com/monero-project/monero.git src
cd src
mkdir build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
make -j$(nproc)
cp stashusd stashusd-wallet-cli ../../build/
```

### 2. Ethereum/Tron Token
```bash
cd ../../eth-trc20-token
npm install
npm run deploy
```

### 3. Bridge Server
```bash
cd ../bridge-server
docker build -t stashusd-bridge .
docker run -p 3000:3000 stashusd-bridge
```

### 4. Cüzdanlar
- `wallets/cryptonote/example.sh`  
- `wallets/ethereum/index.js`  
- `wallets/tron/index.js`  

Hepsi bu kadar—tamamen derlemeye ve canlı test ağında çalışmaya hazır!  
Palladium Corp farkıyla, kolay gelsin!  
