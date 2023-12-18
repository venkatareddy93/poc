    function changeRadioButton(id,id1){
        for(i=1;i<=3;i++){
            document.getElementById('case-id-'+i).classList.add('d-none')
            document.getElementById('b'+i).classList.remove('border-green')

        }
        document.getElementById(id).classList.remove('d-none')
        document.getElementById(id1).classList.add('border-green')
    }
