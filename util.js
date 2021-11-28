module.exports = {
	functions: 
    
	{ matrixProduct(mat1, mat2){
    
	    if(mat1[0].length !== mat2.length){
		console.log("The number of columns of the 1st matrix must equal the number of rows of the 2nd one.");
		return "see above"
	    }
	    
	    const result = [];
	    for(let i = 0; i < mat1.length; i++) {
		result[i] = [];
    
		for(let j = 0; j < mat2[0].length; j++) {
		    result[i][j] = 0;
		    for (let k = 0; k < mat2.length; k++) {
			result[i][j] += mat1[i][k] * mat2[k][j]; 
		    }
		}
	    }
	    return result;
    
    
	},
	  
	 sumOfMatrices(mat1, mat2){
    
	    if(mat1.length !== mat2.length || mat1[0].length !== mat2[0].length){
		console.log("Two matrices should have the same dimensions!!!.");
		return "see above";
	    }
	    
	    const result = [];
	    for(let i = 0; i < mat1.length; i++) {
		
		result[i] = [];
    
		for(let j = 0; j < mat2[0].length; j++) {
		    
		    result[i][j] = mat1[i][j] + mat2[i][j] ;
		    
		}
	    }
    
	    return result;
    
    
	},
    
	sumOfArray(arr){
	    let result = 0;
	    for (let i = 0; i < arr.length; i++) {
		result += arr[i];
	    }
	    return result;
	},
    
	sumOfRows(mat){
	    let result = [];
	    for (let i = 0; i < mat.length; i++) {
		result[i] = this.sumOfArray(mat[i]);
	    }
	    return result;
	}
    
    
    
	}
    
      
    }