// Verified address names
// Copyright (c) 2020 Beyondtoshi
// Copyright (c) 2020 The Beyondcoin Project
// Copyright (c) 2020 The Beyondcoin Core developers

function addressName(address) {
	if (address == "BKJKT5ZpdxppVa8LDNxCYnfHHNNAA1Xdi1") { // FOUNDER
		$("#addressnametext").removeClass("hidden").addClass("show")
		var addressnametext = `
				<span id="addressnametext" class="addressnametext transaction-badge">
					<span class="ml-1 badge badge-primary">
						Founder
					</span>
				</span>`
		return addressnametext
	}
	else if (address == "BjxegtS4ztCS51gskLSYYB3Kce57W1knPc") { // TEAM MEMBER
		$("#addressnametext").removeClass("hidden").addClass("show")
		var addressnametext = `
				<span id="addressnametext" class="addressnametext transaction-badge">
					<span class="ml-1 badge badge-primary">
						Team Member
					</span>
				</span>`
        return addressnametext
    }
	else if (address == "BEYoNDdD2iKA5kw4a7ki7Ck1H4PkW9qXsF") { // BEYONDCOINPOOL.COM
		$("#addressnametext").removeClass("hidden").addClass("show")
		var addressnametext = `
				<span id="addressnametext" class="addressnametext transaction-badge">
					<span class="ml-1 badge badge-primary">
						Beyondcoin Pool
					</span>
				</span>`
		return addressnametext
	}
	else if (address == "BaVe4c6P4X6QzPg9DRdJ9qcf7R8SLkfgnM") { // GPUHOT.COM
	    $("#addressnametext").removeClass("hidden").addClass("show")
		var addressnametext = `
				<span id="addressnametext" class="addressnametext transaction-badge">
					<span class="ml-1 badge badge-primary">
						gpuhot.com
					</span>
				</span>`
		return addressnametext
	}
	else if (address == "BkCG1E9bEq37Tpo7ihsNfWZpEVZVuHViqH ") { // ICOPOOL.COM
		$("#addressnametext").removeClass("hidden").addClass("show")
		var addressnametext = `
				<span id="addressnametext" class="addressnametext transaction-badge">
					<span class="ml-1 badge badge-primary">
						icopool.com
					</span>
				</span>`
		return addressnametext
	}
	else if (address == "BoBQio1Afgs7ww4gnNzbszBSZjDM9phMg1") { // MINER-WORLD.COM
		$("#addressnametext").removeClass("hidden").addClass("show")
		var addressnametext = `
				<span id="addressnametext" class="addressnametext transaction-badge">
					<span class="ml-1 badge badge-primary">
						miner-world.com
					</span>
				</span>`
		return addressnametext
	}
    else if (address == "BkwR4AojmBxWzmvVkmQ5PQXY1QTvBKf9rb") { // ZPOOL.CA
		$("#addressnametext").removeClass("hidden").addClass("show")
		var addressnametext = `
				<span id="addressnametext" class="addressnametext transaction-badge">
					<span class="ml-1 badge badge-primary">
						zpool.ca
					</span>
				</span>`
		return addressnametext
	}
	else if (address == "BRSVbvusH1bXG7sd7t63qdgh66jusHMdJL") { // RESERVE WALLET 1
		$("#addressnametext").removeClass("hidden").addClass("show")
		var addressnametext = `
				<span id="addressnametext" class="addressnametext transaction-badge">
					<span class="ml-1 badge badge-primary">
						Reserve Wallet 1
					</span>
				</span>`
		return addressnametext
	}
	else if (address == "BBYNDXXXXXXXXXXXXXXXXXXXXXXXWsSWbG") { // BURN ADDRESS
	    $("#addressnametext").removeClass("hidden").addClass("show") 
		var addressnametext = `
				<span id="addressnametext" class="addressnametext transaction-badge">
					<span class="ml-1 badge badge-primary">
						Burn Address
					</span>
				</span>`
		return addressnametext
	} else { // HIDE ADDRESS STICKER
		$('#addressnametext').removeClass("show").addClass("hidden")
		var addressnametext = ``
		return addressnametext
	}
}

// END_ADDRESSNAMES
