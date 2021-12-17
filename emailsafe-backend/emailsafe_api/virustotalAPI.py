import os
import virustotal3.core
import json
from emailsafe.APIKEYS import VIRUSTOTAL_API_KEY




vt_files = virustotal3.core.Files(VIRUSTOTAL_API_KEY)
info = vt_files.upload('Procfile')
print(info)
results = virustotal3.core.get_analysis(VIRUSTOTAL_API_KEY, "NzBkODExMjlmZjdjYmJmMTNhZDMzYzAxNDhhYjk4ZGE6MTYzOTc3Mzk2Mg==")
print(json.dumps(results, indent=4, sort_keys=True))