export const changeImageSpecial = (index, setImageSpecial, routesImages) => {

    if (index !== 4 && index !== 5) setImageSpecial(routesImages.Home2)

    if (index === 4) {
        setImageSpecial(routesImages.Rosas)

    } else if (index === 5) {
        setImageSpecial(routesImages.Chocolates)

    } else if (index === 10) {
        setImageSpecial(routesImages.hk)
    } else if (index === 13) {
        setImageSpecial(routesImages.perrito)
    }
}