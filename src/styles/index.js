import { indigo500, indigo700} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {spacing, typography} from 'material-ui/styles';

export const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    alignContent: 'flex-start',
    margin: '10px auto'
}

export const cardStyle = {
    margin: '10px',
    flexBasis: '300px'
}

export const historyStyles = {
    container: {
        margin: '20px'
    },
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'start',
        alignItems: 'baseline',
        alignContent: 'flex-start',

    },
    datePicker: {
        marginLeft: '20px',
        marginRight: '20px'
    }
}

export const muiTheme = getMuiTheme({
    palette: {
        primary1Color: indigo500,
        primary2Color: indigo700,
        pickerHeaderColor: indigo500
    }
})

export const appBarStyle = {
    position: 'fixed',
    top: 0
}

export const mainContentStyle = {
    paddingTop: spacing.desktopKeylineIncrement
}

export const loginButtonStyle = {
    marginTop: '7px'
}

export const userHeaderStyle = {
    fontSize: 24,
    color: typography.textFullWhite,
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: typography.fontWeightLight,
    backgroundColor: muiTheme.palette.primary1Color,
    paddingLeft: spacing.desktopGutter,
    marginBottom: 8
}
