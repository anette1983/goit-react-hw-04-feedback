import PropTypes from 'prop-types';
import StyledSection from './Section.styled';

const Section = ({title, children}) => (
    <StyledSection>
        <h1>{title}</h1>
        {children}
    </StyledSection>
)

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}

export default Section;