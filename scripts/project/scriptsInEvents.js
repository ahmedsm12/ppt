


const scriptsInEvents = {

	async EventSheet1_Event1_Act2(runtime, localVars)
	{
		runtime.objects.Text.getFirstPickedInstance().text=window.top.location.host;
	},

	async EventSheet1_Event2_Act2(runtime, localVars)
	{
		runtime.objects.Text.getFirstPickedInstance().text=window.parent.location;
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

