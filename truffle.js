module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
	networks: {
    		development: {
      			host: "127.0.0.1",
      			port: 7545,
                //gas: 4712388,
			    gasPrice: 5000000000,
      			network_id: "*" // Match any network id
    		},
	
            solc: {
		        optimizer: {
			        enabled: true,
			        runs: 200
		        }
	        }
    }
};
