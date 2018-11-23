import subprocess, os, time
from pywinauto.application import Application

print("start")
file = r"C:\UA3\Source\ManagedCare\Dev\BAS\ManagedCare\BRE\ManagedCare_11122018.ruleappx"
app = Application()
subprocess.Popen(file,shell=True)
#app = Application().start(file)
time.sleep(20)
app.connect(path = "irAuthor.exe")
#app = os.startfile(r"C:\UA3\Source\ManagedCare\Dev\BAS\ManagedCare\BRE\ManagedCare - 11122018.ruleappx", "open")
# window = app.Dialog
# window.Wait('ready')
app.irAuthor.menu_select("Home->Test->MemberAssignmentEdits")
print("end")
print(app)
