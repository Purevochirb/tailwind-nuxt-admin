
export default (context, inject) => {
    const getBackgroundColor = (color) => {
        let c = ''
        switch (color) {
            case "primary":
                c = "bg-primary";
                break;
            case "secondary":
                c = "bg-secondary";
                break;
            case "success":
                c = "bg-success";
                break;
            case "warning":
                c = "bg-warning";
                break;
            case "danger":
                c = "bg-danger";
                break;
            default:
                break;
        }
        return c;
    }

    const getDarkHoverColor = (color) => {
        let c = ''
        switch (color) {
            case "primary":
                c = "hover:bg-primaryDark";
                break;
            case "secondary":
                c = "hover:bg-secondaryDark";
                break;
            case "success":
                c = "hover:bg-successDark";
                break;
            case "warning":
                c = "hover:bg-warningDark";
                break;
            case "danger":
                c = "hover:bg-dangerDark";
                break;
            default:
                break;
        }
        return c;
    }

    const getSoftHoverColor = (color) => {
        let c = ''
        switch (color) {
            case "primary":
                c = "hover:bg-primarySoft";
                break;
            case "secondary":
                c = "hover:bg-secondarySoft";
                break;
            case "success":
                c = "hover:bg-successSoft";
                break;
            case "warning":
                c = "hover:bg-warningSoft";
                break;
            case "danger":
                c = "hover:bg-dangerSoft";
                break;
            default:
                break;
        }
        return c;
    }

    const getHoverColor = (color) => {
        let c = ''
        switch (color) {
            case "primary":
                c = "hover:bg-primary";
                break;
            case "secondary":
                c = "hover:bg-secondary";
                break;
            case "success":
                c = "hover:bg-success";
                break;
            case "warning":
                c = "hover:bg-warning";
                break;
            case "danger":
                c = "hover:bg-danger";
                break;
            default:
                break;
        }
        return c;
    }

    const getBackgroundSoftColor = (color) => {
        let c = ''
        switch (color) {
            case "primary":
                c = "bg-primarySoft";
                break;
            case "secondary":
                c = "bg-secondarySoft";
                break;
            case "success":
                c = "bg-successSoft";
                break;
            case "warning":
                c = "bg-warningSoft";
                break;
            case "danger":
                c = "bg-dangerSoft";
                break;
            default:
                break;
        }
        return c;
    }

    const getOutlineColor = (color) => {
        let c = ''
        switch (color) {
            case "primary":
                c = "outline-primary";
                break;
            case "secondary":
                c = "outline-secondary";
                break;
            case "success":
                c = "outline-success";
                break;
            case "warning":
                c = "outline-warning";
                break;
            case "danger":
                c = "outline-danger";
                break;
            default:
                break;
        }
        return c;
    }

    const getHeight = (color) => {
        let h = ''
        switch (color) {
            case "small":
                h = "h-6";
                break;
            case "normal":
                h = "h-8";
                break;
            case "large":
                h = "h-10";
                break;
            default:
                break;
        }
        return h;
    }

    const getBorderRadius = (color) => {
        let h = ''
        switch (color) {
            case "small":
                h = "rounded-sm";
                break;
            case "normal":
                h = "rounded-lg";
                break;
            case "large":
                h = "rounded-full";
                break;
            default:
                break;
        }
        return h;
    }
    const getBorderColor = (color) => {
        let c = ''
        switch (color) {
            case "primary":
                c = "border-primary";
                break;
            case "secondary":
                c = "border-secondary";
                break;
            case "success":
                c = "border-success";
                break;
            case "warning":
                c = "border-warning";
                break;
            case "danger":
                c = "border-danger";
                break;
            default:
                break;
        }
        return c;
    }

    const getTextColor = (color) => {
        let c = ''
        switch (color) {
            case "primary":
                c = "text-primary";
                break;
            case "secondary":
                c = "text-secondary";
                break;
            case "success":
                c = "text-success";
                break;
            case "warning":
                c = "text-warning";
                break;
            case "danger":
                c = "text-danger";
                break;
            default:
                break;
        }
        return c;
    }

    inject('getBackgroundColor', getBackgroundColor)
    context.$getBackgroundColor = getBackgroundColor

    inject('getBackgroundSoftColor', getBackgroundSoftColor)
    context.$getBackgroundSoftColor = getBackgroundSoftColor
    
    inject('getSoftHoverColor', getSoftHoverColor)
    context.$getSoftHoverColor = getSoftHoverColor

    inject('getHoverColor', getHoverColor)
    context.$getHoverColor = getHoverColor
    

    inject('getDarkHoverColor', getDarkHoverColor)
    context.$getDarkHoverColor = getDarkHoverColor

    inject('getTextColor', getTextColor)
    context.$getTextColor = getTextColor

    inject('getBorderRadius', getBorderRadius)
    context.$getBorderRadius = getBorderRadius


    inject('getOutlineColor', getOutlineColor)
    context.$getOutlineColor = getOutlineColor

    inject('getHeight', getHeight)
    context.$getHeight = getHeight

    inject('getBorderColor', getBorderColor)
    context.$getBorderColor = getBorderColor
}
