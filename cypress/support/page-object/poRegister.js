class poRegister {
    generateRandomName(length) {
        const characters = Math.random().toString(36).substring(2, 10);
        const randomName = 'Dummy ' + characters;

        return randomName;
      }
}

export default new poRegister()