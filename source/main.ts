declare var window: any
declare var global: any

if (window.global === undefined) {
    window.global = window;
}

// UIKit

import { UIViewContentMode, UIControlState, UIControlContentVerticalAlignment, UIControlContentHorizontalAlignment, UITextAlignment, UILineBreakMode, UITextFieldViewMode, UITextAutocapitalizationType, UITextAutocorrectionType, UITextSpellCheckingType, UIKeyboardType, UIReturnKeyType, UILayoutConstraintAxis, UIStackViewDistribution, UIStackViewAlignment, UIStatusBarStyle } from "./uikit/UIEnums";
global.UIViewContentMode = UIViewContentMode
global.UIControlState = UIControlState
global.UIControlContentVerticalAlignment = UIControlContentVerticalAlignment
global.UIControlContentHorizontalAlignment = UIControlContentHorizontalAlignment
global.UITextAlignment = UITextAlignment
global.UILineBreakMode = UILineBreakMode
global.UITextFieldViewMode = UITextFieldViewMode
global.UITextAutocapitalizationType = UITextAutocapitalizationType
global.UITextAutocorrectionType = UITextAutocorrectionType
global.UITextSpellCheckingType = UITextSpellCheckingType
global.UIKeyboardType = UIKeyboardType
global.UIReturnKeyType = UIReturnKeyType
global.UILayoutConstraintAxis = UILayoutConstraintAxis
global.UIStackViewDistribution = UIStackViewDistribution
global.UIStackViewAlignment = UIStackViewAlignment
global.UIStatusBarStyle = UIStatusBarStyle

import { UIActivityIndicatorView } from "./uikit/UIActivityIndicatorView";
global.UIActivityIndicatorView = UIActivityIndicatorView

import { UIAlert } from "./uikit/UIAlert";
global.UIAlert = UIAlert

import { UIAnimator } from "./uikit/UIAnimator";
global.UIAnimator = UIAnimator

import { UIButton } from "./uikit/UIButton";
global.UIButton = UIButton

import { UICollectionView, UICollectionViewCell, UICollectionViewLayout } from "./uikit/UICollectionView";
global.UICollectionView = UICollectionView
global.UICollectionViewCell = UICollectionViewCell
global.UICollectionViewLayout = UICollectionViewLayout

import { UICollectionViewFlowLayout, UICollectionViewScrollDirection } from "./uikit/UICollectionViewFlowLayout";
global.UICollectionViewFlowLayout = UICollectionViewFlowLayout
global.UICollectionViewScrollDirection = UICollectionViewScrollDirection

import { UIColor } from './uikit/UIColor'
global.UIColor = UIColor

import { UIConfirm } from "./uikit/UIConfirm";
global.UIConfirm = UIConfirm

import { UIFetchMoreControl } from "./uikit/UIFetchMoreControl";
global.UIFetchMoreControl = UIFetchMoreControl

import { UIFont } from "./uikit/UIFont";
global.UIFont = UIFont

import { UIGestureRecognizerState, UIGestureRecognizer } from "./uikit/UIGestureRecognizer";
global.UIGestureRecognizerState = UIGestureRecognizerState
global.UIGestureRecognizer = UIGestureRecognizer

import { UIImage, UIImageRenderingMode } from "./uikit/UIImage";
global.UIImage = UIImage
global.UIImageRenderingMode = UIImageRenderingMode

import { UIImageView } from "./uikit/UIImageView";
global.UIImageView = UIImageView

import { UILabel } from "./uikit/UILabel";
global.UILabel = UILabel

import { UILongPressGestureRecognizer } from "./uikit/UILongPressGestureRecognizer";
global.UILongPressGestureRecognizer = UILongPressGestureRecognizer

import { UINavigationBar, UINavigationItem, UIBarButtonItem } from "./uikit/UINavigationBar";
global.UINavigationBar = UINavigationBar
global.UINavigationItem = UINavigationItem
global.UIBarButtonItem = UIBarButtonItem

import { UINavigationController } from "./uikit/UINavigationController";
global.UINavigationController = UINavigationController

import { UINavigationBarViewController } from "./uikit/UINavigationBarViewController";
global.UINavigationBarViewController = UINavigationBarViewController

import { UIPageViewController } from "./uikit/UIPageViewController";
global.UIPageViewController = UIPageViewController

import { UIPanGestureRecognizer } from "./uikit/UIPanGestureRecognizer";
global.UIPanGestureRecognizer = UIPanGestureRecognizer

import { UIPinchGestureRecognizer } from "./uikit/UIPinchGestureRecognizer";
global.UIPinchGestureRecognizer = UIPinchGestureRecognizer

import { UIProgressView } from "./uikit/UIProgressView";
global.UIProgressView = UIProgressView

import { UIPrompt } from "./uikit/UIPrompt";
global.UIPrompt = UIPrompt

import { UIRefreshControl } from "./uikit/UIRefreshControl";
global.UIRefreshControl = UIRefreshControl

import { UIRotationGestureRecognizer } from "./uikit/UIRotationGestureRecognizer";
global.UIRotationGestureRecognizer = UIRotationGestureRecognizer

import { UIScreen } from "./uikit/UIScreen";
global.UIScreen = UIScreen

import { UIScrollView } from "./uikit/UIScrollView";
global.UIScrollView = UIScrollView

import { UISlider } from "./uikit/UISlider";
global.UISlider = UISlider

import { UISwitch } from "./uikit/UISwitch";
global.UISwitch = UISwitch

import { UITableView, UITableViewCell } from "./uikit/UITableView";
global.UITableView = UITableView
global.UITableViewCell = UITableViewCell

import { UITapGestureRecognizer } from "./uikit/UITapGestureRecognizer";
global.UITapGestureRecognizer = UITapGestureRecognizer

import { UITextField } from "./uikit/UITextField";
global.UITextField = UITextField

import { UITextView } from "./uikit/UITextView";
global.UITextView = UITextView

import { UIView, UIWindow } from './uikit/UIView'
global.UIView = UIView
global.UIWindow = UIWindow

import { UIViewController } from "./uikit/UIViewController";
global.UIViewController = UIViewController

// Foundation

import { DispatchQueue } from "./foundation/DispatchQueue";
global.DispatchQueue = DispatchQueue