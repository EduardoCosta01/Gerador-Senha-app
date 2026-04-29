interface GeneratePassOptions {
  length: number;
  useLowercase: boolean;
  useUppercase: boolean;
  useNumbers: boolean;
  useSpecialChars: boolean;
}

export default function generatePass({
  length,
  useLowercase,
  useUppercase,
  useNumbers,
  useSpecialChars,
}: GeneratePassOptions) {
  let password = '';
  let characters = '';

  if (useLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
  if (useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (useNumbers) characters += '0123456789';
  if (useSpecialChars) characters += '!@#$%&*()-_=+[]{};:,.<>?';

  if (!characters) return '';

  for (let index = 0; index < length; index++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}