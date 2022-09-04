document.getElementById('getCve').addEventListener('click', getCve);

        function getCve(){
            fetch('https://corsanywhere.herokuapp.com/https://cve.circl.lu/api/last/50')
            .then((res) => res.json())
            .then((data) => {
                let output = '<h2 class="mb-4">Most Recent 50 Vulnerabilities</h2>';
                data.forEach(function(last){
                    output += `
                    <div class="card card-body mb-3 card-bg">
                        <h3>${last.id}</h3>
                        <p>${last.summary}<p>
                        <p>References: ${last.references}</p>  
                    </div>
                    `;
                })
                document.getElementById('output').innerHTML = output;
            })
        }