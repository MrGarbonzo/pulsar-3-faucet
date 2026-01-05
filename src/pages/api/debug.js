export default function handler(req, res) {
  const mnemonic = process.env.SECRET_MNEMONIC || '';

  return res.status(200).json({
    raw_length: mnemonic.length,
    word_count: mnemonic.trim().split(/\s+/).length,
    first_15_chars: mnemonic.substring(0, 15),
    last_15_chars: mnemonic.substring(mnemonic.length - 15),
    has_newlines: mnemonic.includes('\n'),
    has_tabs: mnemonic.includes('\t'),
    char_codes_first_20: [...mnemonic.substring(0, 20)].map(c => c.charCodeAt(0))
  });
}
