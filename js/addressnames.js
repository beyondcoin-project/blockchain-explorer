// Verified address names
// Copyright (c) 2020 Beyondtoshi
// Copyright (c) 2020 The Beyondcoin Project
// Copyright (c) 2020 The Beyondcoin Core developers

function addressName(address) {
	if (address == "BKJKT5ZpdxppVa8LDNxCYnfHHNNAA1Xdi1") { // FOUNDER
		$("#addressnametext").removeClass("hidden").addClass("show")
		var addressnametext = "Founder"
		return addressnametext
	}
	else if (address == "BjxegtS4ztCS51gskLSYYB3Kce57W1knPc") { // TEAM MEMBER
		$("#addressnametext").removeClass("hidden").addClass("show")
		var addressnametext = "Team member"
        return addressnametext
    }
	else if (address == "BEYoNDdD2iKA5kw4a7ki7Ck1H4PkW9qXsF") { // BEYONDCOINPOOL.COM
		$("#addressnametext").removeClass("hidden").addClass("show")
		var addressnametext = "Beyondcoin Pool"
		return addressnametext
	}
	else if (address == "BaVe4c6P4X6QzPg9DRdJ9qcf7R8SLkfgnM") { // GPUHOT.COM
	    $("#addressnametext").removeClass("hidden").addClass("show")
		var addressnametext = "GPUHot.com"
		return addressnametext
	}
	else if (address == "BkCG1E9bEq37Tpo7ihsNfWZpEVZVuHViqH ") { // ICOPOOL.COM
		$("#addressnametext").removeClass("hidden").addClass("show")
		var addressnametext = "icopool.com"
		return addressnametext
	}
	else if (address == "BoBQio1Afgs7ww4gnNzbszBSZjDM9phMg1") { // MINER-WORLD.COM
		$("#addressnametext").removeClass("hidden").addClass("show")
		var addressnametext = "miner-world.com"
		return addressnametext
	}
    else if (address == "BkwR4AojmBxWzmvVkmQ5PQXY1QTvBKf9rb") { // ZPOOL.CA
		$("#addressnametext").removeClass("hidden").addClass("show")
		var addressnametext = "zpool.ca"
		return addressnametext
	}
	else if (address == "BRSVbvusH1bXG7sd7t63qdgh66jusHMdJL") { // RESERVE WALLET 1
		$("#addressnametext").removeClass("hidden").addClass("show")
		var addressnametext = "Reserve Wallet 1"
		return addressnametext
	}
	else if (address == "BBYNDXXXXXXXXXXXXXXXXXXXXXXXWsSWbG") { // BURN ADDRESS
	    $("#addressnametext").removeClass("hidden").addClass("show") 
		var addressnametext = "Burn Address"
		return addressnametext
	} else { // HIDE ADDRESS STICKER
		$('#addressnametext').removeClass("show").addClass("hidden")
        return addressnametext
	}
}

// END_ADDRESSNAMES
