import PropTypes from "prop-types";
export default function EmailTemplate({ options, referral }) {
if (referral) {
	const {
		'referrertype[type]': referrerType,
		referrername,
		referrernumber,
		referrerEmail,
		fullname,
		dob,
		number,
		email,
		'insurancetype[type]': insurancetype,
		'waivertype[type]': waivertype,
		address,
		city,
		region,
		county,
		postalcode,
		comments,
	} = options;
	return (
		<div>
			<h1>Referral From: <span style={{fontWeight: 'normal'}}> {referrerType}</span></h1>
            <h3>Referrer Name: <span style={{fontWeight: 'normal'}}> {referrername}</span></h3>
            <h3>Referrer Phone Number: <span style={{fontWeight: 'normal'}}> {referrernumber}</span></h3>
            <h3>Referrer Email: <span style={{fontWeight: 'normal'}}> {referrerEmail}</span></h3>
            <h3>Client Name: <span style={{fontWeight: 'normal'}}> {fullname}</span></h3>
            <h3>Client DOB: <span style={{fontWeight: 'normal'}}> {dob}</span></h3>
            <h3>Client Phone Number: <span style={{fontWeight: 'normal'}}> {number}</span></h3>
            <h3>Client Email: <span style={{fontWeight: 'normal'}}> {email}</span></h3>
            <h3>Insurance Type: <span style={{fontWeight: 'normal'}}> {insurancetype}</span></h3>
            <h3>Waiver Type: <span style={{fontWeight: 'normal'}}> {waivertype}</span></h3>
            <h3>Client Address: <span style={{fontWeight: 'normal'}}> {address}</span></h3>
            <h3>Client City: <span style={{fontWeight: 'normal'}}> {city}</span></h3>
            <h3>Client Region: <span style={{fontWeight: 'normal'}}> {region}</span></h3>
            <h3>Client County: <span style={{fontWeight: 'normal'}}> {county}</span></h3>
            <h3>Client Postal Code: <span style={{fontWeight: 'normal'}}> {postalcode}</span></h3>
            <h3>Comments: <span style={{fontWeight: 'normal'}}> {comments}</span></h3>
		</div>
	);
}
}
EmailTemplate.propTypes = {
    options: PropTypes.shape({
        'referrertype[type]': PropTypes.string.isRequired,
        referrername: PropTypes.string.isRequired,
        referrernumber: PropTypes.string.isRequired,
        referrerEmail: PropTypes.string.isRequired,
        fullname: PropTypes.string.isRequired,
        dob: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        'insurancetype[type]': PropTypes.string.isRequired,
        'waivertype[type]': PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        region: PropTypes.string.isRequired,
        county: PropTypes.string.isRequired,
        postalcode: PropTypes.string.isRequired,
        comments: PropTypes.string.isRequired,
    }).isRequired,
    referral: PropTypes.bool.isRequired,
};
