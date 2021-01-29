const scrollVirtual = async (items,numberMax) => {
	return await items.slice(0, numberMax)
}

module.exports = {
	scrollVirtual
}