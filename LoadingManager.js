class LoadingManager {
    constructor() {
        this.sections = {
            a: false,
            b: false
        }
    }

    markLoaded(section) {
        if (!this.sections.hasOwnProperty(section)) throw new Error(`Section '${section}' doesn't exist.`)
        this.sections[section] = true
    }

    get allLoaded() {
        const notLoaded = Object.keys(this.sections).filter(key => {
            return this.sections[key] === false
        })
        return notLoaded.length === 0
    }
}

const manager = new LoadingManager

module.exports = manager