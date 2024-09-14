import PropTypes from 'prop-types';
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
				<h1>
					Referral From:{' '}
					<span style={{ fontWeight: 'normal' }}> {referrerType}</span>
				</h1>
				<h3>
					Referrer Name:{' '}
					<span style={{ fontWeight: 'normal' }}> {referrername}</span>
				</h3>
				<h3>
					Referrer Phone Number:{' '}
					<span style={{ fontWeight: 'normal' }}> {referrernumber}</span>
				</h3>
				<h3>
					Referrer Email:{' '}
					<span style={{ fontWeight: 'normal' }}> {referrerEmail}</span>
				</h3>
				<h3>
					Client Name: <span style={{ fontWeight: 'normal' }}> {fullname}</span>
				</h3>
				<h3>
					Client DOB: <span style={{ fontWeight: 'normal' }}> {dob}</span>
				</h3>
				<h3>
					Client Phone Number:{' '}
					<span style={{ fontWeight: 'normal' }}> {number}</span>
				</h3>
				<h3>
					Client Email: <span style={{ fontWeight: 'normal' }}> {email}</span>
				</h3>
				<h3>
					Insurance Type:{' '}
					<span style={{ fontWeight: 'normal' }}> {insurancetype}</span>
				</h3>
				<h3>
					Waiver Type:{' '}
					<span style={{ fontWeight: 'normal' }}> {waivertype}</span>
				</h3>
				<h3>
					Client Address:{' '}
					<span style={{ fontWeight: 'normal' }}> {address}</span>
				</h3>
				<h3>
					Client City: <span style={{ fontWeight: 'normal' }}> {city}</span>
				</h3>
				<h3>
					Client Region: <span style={{ fontWeight: 'normal' }}> {region}</span>
				</h3>
				<h3>
					Client County: <span style={{ fontWeight: 'normal' }}> {county}</span>
				</h3>
				<h3>
					Client Postal Code:{' '}
					<span style={{ fontWeight: 'normal' }}> {postalcode}</span>
				</h3>
				<h3>
					Comments: <span style={{ fontWeight: 'normal' }}> {comments}</span>
				</h3>
			</div>
		);
	}
	console.log({ options });
	const {
		'first-name': firstname,
		'last-name': lastname,
		company,
		email,
		country,
		'phone-number': phonenumber,
		message,
	} = options;
	return (
		<div>
			<h1>General Inquiry</h1>
			<h3>
				First Name: <span style={{ fontWeight: 'normal' }}> {firstname}</span>
			</h3>
			<h3>
				Last Name: <span style={{ fontWeight: 'normal' }}> {lastname}</span>
			</h3>
			<h3>
				Company: <span style={{ fontWeight: 'normal' }}> {company}</span>
			</h3>
			<h3>
				E-mail: <span style={{ fontWeight: 'normal' }}> {email}</span>
			</h3>
			<h3>
				Country: <span style={{ fontWeight: 'normal' }}> {country}</span>
			</h3>
			<h3>
				Phone Number:{' '}
				<span style={{ fontWeight: 'normal' }}> {phonenumber}</span>
			</h3>
			<h3>
				Message: <span style={{ fontWeight: 'normal' }}> {message}</span>
			</h3>
		</div>
	);
}
EmailTemplate.propTypes = {
	options: PropTypes.shape({
		// referral
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
		// contact
		'first-name': PropTypes.string.isRequired,
		'last-name': PropTypes.string.isRequired,
		company: PropTypes.string.isRequired,
		country: PropTypes.string.isRequired,
		'phone-number': PropTypes.string.isRequired,
		message: PropTypes.string.isRequired,
	}).isRequired,
	referral: PropTypes.bool,
};
