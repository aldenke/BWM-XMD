const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV25KiSBT8l3rVXrnIzYiOWMAbIt5AVDb2oYACS7BAClCc8N83aKe3O3ZnZnvfiILKkydPnuQbIBmmyEQNGHwDeYFrWKL2sWxyBAZAq6IIFaALQlhCMABozrNjPLudJ64+FRhZPUe80+xdwZc7vQvx4lvaUN1ZZtPkFTy6IK/8FAe/APTzYz7hFcfQJua9lzL1ZYh6gnL3EDvfzC/mMpoGkhcvguT6Ch4tIsQFJvEoP6IzKmBqomYFcfE1+say6XGJ5dgTKsAb6ylkt4psJoh3WnGK79FGMLcTAx87Y+tr9J2qX9TyyF2uFvZ+K88EZTOSgmPI7mRdm6FrEivhaYjqvrp90qc4Jig0QkRKXDZf1v1iob4T+k0EvSU3qcb56bq8MpWxcxXNn/tGbEsnsk72s33wNeLnziFPs6y6XLf1ftPLpFk2lQ4SE7O5bMxPsLjQiy5LJmLUz8RXxbtXkv+jO1zeXfeSX+Nsrbl17u9EYkRleLgug3riVags4n2uXciCM75GX5vN8gUaOYG5aZRSYYYmzNFxv5b16N6hc7d2hXVYsqf5ZPRBH5ZV8SuW5oxV0v5mZezu/HR9q28sbxrhdSUqy9hzRZjPR9xNNM/E7CHPmdk71rbnnIUKWZc72XHOzqnX9xrdkkZGysasYpMbXr++dZSgxgjBgH10QYFiTMsCljgj7ZkidQEMaxsFBSrf1AX88TRbiMdSoqkK1Wy4peQsyoE9DO8TM19IvqhYGjTW6jZ4BV2QF1mAKEXhFNMyKxoLUQpjRMHgj7dBtT0X6JyVaIZDMACc0Jd4WWb6Cs/+Tn+7HmFJYZ7/RlAJuiAqsrOFwKAsKtQFbxdURlNGHMNwIivyqsCoiiAqqjRUmD4/lkSx7fD8LOrgM6IlPOdgwEq83OcFhuMef3YBQbfyaZ+2aZ7tgggXtNySKk8zGL576/0lDIKsIqXdkEBvH1ABBszHMSpLTGLadlYRWARHXCO97QMMIphS9OiCENU4QC0eWE19McR0tpF1vN6e1vPTPgrjVrljRp6fSDLnQ5ETXhCnBC/9wBdfFCb0XxRBDAIpiliZj0Arx3Nz2zs/T8nATogvSF5YLBmN74R9TdQuIy/FzJsZng5ABQrfVfZhkFS5kyWI/AJXcgVCNtthUeiHIRzvrCgRYWBHC8f6hPt0Fhh8+0hLPQtbPHUsubO9MgHttNo6/3LDgP+nHx5/a95eCFEJcUrBAOgzjr1gZl2FK6FWDwfVVlVTVVs7vs/ofeWenp6gnikKXl7rh+ts4XZEkimlm8hjOsONrVzu91XaOfYt1MQ/AgEDUAlErWMzma88TofbXu/i9uHYuhuGash3hhx7txiOJ3QR17CwhqmBl+tsF0k7wxE546bUSyRuesdzgK2k6K3uum/Nh/FrW+3plc/FosOFxUmo4riXpXEwcpwLnTrROEmWKYwjX8PSNM/O2j68+ng+NSecvfT4A0nT3vrWT026xZ0x1g7CaejFI0ZPFqF7Up9h8BZG6fefAP6+p09nRRi9ZSqB7YT+YzafPc48up8gvof0z9JzQ+qmqnbQv54t3XGjKhdXvuutNF8/0KSGVL4LUYaGU5qBR7u8eQrLKCvObZaTsMhwCLoghbRUP9b0B5vPio+/AFwbByliCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

