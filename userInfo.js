function createUserProfiles(names, modifiedNames) {
    const profiles = [];
    let id = 1;

    for (let i = 0; i < names.length; i++){
        profiles.push({
            originalName: names[i],
            modifiedName: modifiedNames[i],
            id: id
        });
        id++;
    }

    return profiles;
    
}