export const serializeNonPOJOs = (obj: object) => {
	return structuredClone(obj);
};

export const getImageURL = (collectionId: string, recordId: string, fileName: string) => {
	return `http://localhost:8090/api/files/${collectionId}/${recordId}/${fileName}`;
};
