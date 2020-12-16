// Verified miners
// Copyright (c) 2020 Beyondtoshi
// Copyright (c) 2020 The Beyondcoin Project
// Copyright (c) 2020 The Beyondcoin Core developers

function addressName(address) {
	if (address == "BEYoNDdD2iKA5kw4a7ki7Ck1H4PkW9qXsF") { // BEYONDCOINPOOL.COM
		$("#minertext").removeClass("hidden").addClass("show")
		var minertext = "Beyondcoin Pool"
		return minertext
	}
	else if (address == "BaVe4c6P4X6QzPg9DRdJ9qcf7R8SLkfgnM") { // GPUHOT.COM
	    $("#minertext").removeClass("hidden").addClass("show")
		var minertext = "GPUHot.com"
		return minertext
	}
	else if (address == "BkCG1E9bEq37Tpo7ihsNfWZpEVZVuHViqH ") { // ICOPOOL.COM
		$("#minertext").removeClass("hidden").addClass("show")
		var minertext = "icopool.com"
		return minertext
	}
	else if (address == "BoBQio1Afgs7ww4gnNzbszBSZjDM9phMg1") { // MINER-WORLD.COM
		$("#minertext").removeClass("hidden").addClass("show")
		var minertext = "miner-world.com"
		return minertext
	}
    else if (address == "BkwR4AojmBxWzmvVkmQ5PQXY1QTvBKf9rb") { // ZPOOL.CA
		$("#minertext").removeClass("hidden").addClass("show")
		var minertext = "zpool.ca"
		return minertext
    } else { // UNKNOWN MINER
		$("#minertext").removeClass("hidden").addClass("show")
		var minertext = "Unknown"
		return minertext
	}
}

// END_MINERS
