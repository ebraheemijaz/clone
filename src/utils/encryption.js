import crypto from 'crypto'

const ecnryption_method = 'aes-256-cbc'

export function encrypt(text) {
  const cipher = crypto.createCipheriv(ecnryption_method, process.env.ENCYPTION_KEY, process.env.ENCYPTION_IV)
  
return Buffer.from(cipher.update(text, 'utf8', 'hex') + cipher.final('hex')).toString('base64')
}

export function decrypt(text) {
  let encryptedText = Buffer.from(text, 'hex')

  let decipher = crypto.createDecipheriv(
    ecnryption_method,
    Buffer.from(process.env.ENCYPTION_KEY),
    process.env.ENCYPTION_IV
  )
  let decrypted = decipher.update(encryptedText)
  decrypted = Buffer.concat([decrypted, decipher.final()])
  
return decrypted.toString()
}
