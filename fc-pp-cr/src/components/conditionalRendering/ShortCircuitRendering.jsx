export function ShortCicuite(){


	const hasUnread = true
	const discount = 30
	return (
		<>
		<Notification hasUnread={false}/>
		<Notification hasUnread = {hasUnread}/>
		<PromoBanner showBanner = {true} discount = { discount }/>
		</>
	)
}


function Notification({ hasUnread }) {
	return (
		<div>
			{hasUnread && <p>You have unread messages!</p>}
		</div>
	);
}


function PromoBanner({ showBanner, discount }){
	return(
		<>
		{showBanner && <h4>🎉 Big Sale! Get {discount}% Off!</h4>}
		</>
	)
}