import os
import virustotal3.core
import json
from emailsafe.APIKEYS import VIRUSTOTAL_API_KEY
from .models import EmailItem




vt_files = virustotal3.core.Files(VIRUSTOTAL_API_KEY)
info = vt_files.upload('Procfile')
print(info)
results = virustotal3.core.get_analysis(VIRUSTOTAL_API_KEY, "NzBkODExMjlmZjdjYmJmMTNhZDMzYzAxNDhhYjk4ZGE6MTYzOTc3Mzk2Mg==")
print(json.dumps(results, indent=4, sort_keys=True))

def scan_attachment(primary_key):
    email_item = EmailItem.objects.get(pk=primary_key)
    attachment_text = email_item.attachments
    with open(f"./tmp/{email_item}.txt","w") as file:
        file.write(attachment_text)
    vt_files = virustotal3.core.Files(VIRUSTOTAL_API_KEY)
    report_result = vt_files.upload(f"./tmp/{email_item}.txt")
    print(report_result)
    # results = virustotal3.core.get_analysis(VIRUSTOTAL_API_KEY,report_result)