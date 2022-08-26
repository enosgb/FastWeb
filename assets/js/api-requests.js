export default async function getUniversiades(universidade){
    const response = await fetch(`http://universities.hipolabs.com/search?name=${universidade}`);
    const result = await response.json()
    return result;    
}
