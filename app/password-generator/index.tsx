import { useState, useEffect } from 'react';
import { Slider } from '~/components/ui/slider';
import { Switch } from '~/components/ui/switch';
import { RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

export default function PasswordGenerator() {
  const [password, setPassword] = useState('P4$5W0rD!');
  const [passwordLength, setPasswordLength] = useState(9);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState(
    'Moderate: Not bad, but not Fort Knox either.'
  );
  const [isClipboardCopied, setIsClipboardCopied] = useState(false);

  const generatePassword = () => {
    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?/';

    if (charset === '') {
      charset = 'abcdefghijklmnopqrstuvwxyz';
      setIncludeLowercase(true);
    }

    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }

    setPassword(newPassword);
    evaluatePasswordStrength(newPassword);
  };

  const evaluatePasswordStrength = (pwd: string) => {
    const length = pwd.length;
    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSymbol = /[^A-Za-z0-9]/.test(pwd);

    const criteriaCount = [hasUpper, hasLower, hasNumber, hasSymbol].filter(
      Boolean
    ).length;

    if (length < 8 || criteriaCount < 3) {
      setPasswordStrength('Weak: Easy to crack.');
    } else if (length < 12 || criteriaCount < 4) {
      setPasswordStrength('Moderate: Not bad, but not Fort Knox either.');
    } else {
      setPasswordStrength('Strong: Good luck cracking this one!');
    }
  };

  const copyToClipboard = () => {
    setIsClipboardCopied(true);
    navigator.clipboard
      .writeText(password)
      .then(() => {
        toast.success('Password copied to clipboard!', {
          duration: 2000,
        });
        setTimeout(() => {
          setIsClipboardCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  useEffect(() => {
    generatePassword();
  }, [
    passwordLength,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  ]);

  return (
    <main className="flex-1 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative mx-4 border border-gray-100">
        <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-gray-300"></div>

        <h1 className="text-2xl font-bold text-center mb-1">Pwrdex</h1>
        <p className="text-gray-500 text-center mb-6">
          Generate strong unique passwords
        </p>

        <div className="mb-6">
          <div className="flex items-center bg-gray-50 rounded-md p-4 mb-2">
            <div className="font-mono text-xl flex-grow">{password}</div>
            <button
              onClick={copyToClipboard}
              className="bg-gray-800 text-white px-3 py-1 rounded-md mr-2 hover:bg-gray-700 transition-colors"
            >
              {isClipboardCopied ? <span>Copied!</span> : <span>Copy</span>}
            </button>
            <button
              onClick={generatePassword}
              className="bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              <RefreshCw size={16} />
            </button>
          </div>
          <div className="bg-amber-100 text-amber-800 p-2 rounded-md text-sm">
            {passwordStrength}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-gray-700">Password length</label>
              <span className="font-medium">{passwordLength}</span>
            </div>
            <Slider
              value={[passwordLength]}
              min={4}
              max={32}
              step={1}
              onValueChange={(value) => setPasswordLength(value[0])}
              className="py-2"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-gray-700">Include Uppercase Letters</label>
            <Switch
              checked={includeUppercase}
              onCheckedChange={setIncludeUppercase}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-gray-700">Include Lowercase Letters</label>
            <Switch
              checked={includeLowercase}
              onCheckedChange={setIncludeLowercase}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-gray-700">Include Numbers</label>
            <Switch
              checked={includeNumbers}
              onCheckedChange={setIncludeNumbers}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-gray-700">Include Symbols</label>
            <Switch
              checked={includeSymbols}
              onCheckedChange={setIncludeSymbols}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
